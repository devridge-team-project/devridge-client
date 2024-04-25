import { PostCard } from "@/design";
import { useState, useEffect } from "react";
import { Client } from "@stomp/stompjs";
import { PrivateMessage } from "@/interface";
import { cn } from "@/util";
import { useLocation, useParams } from "react-router-dom";

const { VITE_CHAT_URL } = import.meta.env;

function Message({ id, posts }: { id: number; posts?: PrivateMessage[] }) {
  const header = {
    // positions: "fixed top-35 left-0",
    sizes: "w-full",
    styles: "bg-white",
  };

  const {
    state: { nickname },
  } = useLocation();

  const [Messages, setMessages] = useState<PrivateMessage[]>(
    posts as PrivateMessage[]
  );
  const [inputMessage, setInputMessage] = useState("");
  const [stompClient, setStompClient] = useState<Client | null>(null);

  useEffect(() => {
    const stomp = new Client({
      brokerURL: `${VITE_CHAT_URL}/api/ws`,
      connectHeaders: {
        "Content-Type": "application/json",
      },
      debug: (str: string) => {
        console.log(str);
      },
    });

    setStompClient(stomp);
    stomp.activate();
    stomp.onConnect = () => {
      console.log("WebSocket 연결이 열렸습니다.");
      const subDestination = `/api/sub/${id}`;

      stomp.subscribe(subDestination, (frame) => {
        try {
          const parsedMessage = JSON.parse(frame.body);
          console.log(Messages);
          console.log(parsedMessage);

          setMessages([...(Messages as PrivateMessage[]), parsedMessage]);
        } catch (error) {
          console.error("오류가 발생했습니다:", error);
        }
      });
    };
    return () => {
      if (stompClient && stompClient.connected) {
        stompClient.deactivate();
      }
    };
  }, []);

  const sendMessage = () => {
    if (stompClient && stompClient.connected && inputMessage) {
      const destination = `/api/pub/${id}`;
      stompClient.publish({
        destination,
        body: JSON.stringify({
          message: inputMessage,
        }),
      });
    }

    setInputMessage("");
  };
  return (
    <div className={cn(header)}>
      <div className="h-[63px] flex items-center border-y border-gray-200">
        <span className="text-xl ml-7.5">{nickname}님 과의 대화</span>
      </div>
      <div className="min-h-screen overflow-y-auto">
        {posts?.map(({ id, member, message }) => {
          return (
            <div
              key={id}
              className={`m-7.5 ${
                nickname === member?.nickname ? "" : "flex justify-end"
              }`}
            >
              {nickname === member?.nickname && (
                <div className="text-xs font-bold mb-2.5">
                  {member?.nickname}
                </div>
              )}
              <div
                className={`w-[230px] min-h-[45px] text-xs flex justify-center items-center rounded-tr-[15px] rounded-b-[15px] ${
                  nickname === member?.nickname
                    ? "bg-bright-purple text-white"
                    : "bg-white-gray "
                }`}
              >
                <span>{message}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="메시지를 입력해주세요"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          className="border pl-6.25  box-border border-white-gray w-full h-12.5"
        />
        <img
          src="/images/arrow.png"
          alt="arrow"
          className="p-3.25 bg-bright-purple"
          onClick={sendMessage}
        />
      </div>
    </div>
  );
}

export default Message;
