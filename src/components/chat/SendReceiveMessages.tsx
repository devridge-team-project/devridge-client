import React from "react";
import { cn } from "@/util";
import { Link } from "react-router-dom";
import { SendReceiveChat, ChatResponse, OnClick } from "@/interface";

export default function SendReceiveMessages({
  mutate,
  pathname,
  posts,
}: {
  mutate: OnClick<ChatResponse>;
  pathname: string;
  posts?: SendReceiveChat;
}) {
  const header = {
    positions: "fixed top-35 left-0",
    sizes: "w-full h-37",
    styles: "bg-white",
  };
  return (
    <div className={cn(header)}>
      <div className="pr-9 flex justify-end tems-center gap-5 w-full h-13 border-b ">
        <Link to="/chat">매세지</Link>
        <Link
          to="/chat/receive"
          className={pathname === "/chat/receive" ? "font-bold" : ""}
        >
          받은 요청
        </Link>
        <Link
          to="/chat/send"
          className={pathname === "/chat/send" ? "font-bold" : ""}
        >
          보낸 요청
        </Link>
      </div>
      <div>
        {posts?.coffeeChatRequests?.map(
          ({
            id,
            member: { nickname, profileImageUrl, introduction },
            message,
            status,
          }) => {
            return (
              <div key={id}>
                <div className="flex py-3.75 border-t border-gray-200">
                  <img
                    src={profileImageUrl as string}
                    className="h-12.5 w-12.5 rounded-full bg-gray-200 "
                    alt="profileImage"
                  />
                  <div className="ml-3.5">
                    <div className="text-1xl font-bold">{nickname}</div>
                    <div className="text-1xl">{introduction}</div>
                  </div>
                </div>
                <div>{message}</div>
                <div className="mt-6.25 mb-3.75 mx-7.5 flex justify-end">
                  {pathname === "/coffeechat/res" ? (
                    <>
                      <button
                        type="button"
                        className="w-17.5 h-7.5 rounded bg-blue-grey text-white"
                        onClick={() => mutate({ id, answer: "Y" })}
                      >
                        수락
                      </button>
                      <button
                        type="button"
                        className="w-17.5 h-7.5 rounded border-[1px] border-solid border-white-grey"
                        onClick={() => mutate({ id, answer: "N" })}
                      >
                        거절
                      </button>
                    </>
                  ) : (
                    <div>승인 {status}</div>
                  )}
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
