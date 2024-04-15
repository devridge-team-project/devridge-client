import { useQuery, useMutation } from "@tanstack/react-query";
import { SendReceiveMessages } from "@/components";
import { ChatResponse } from "@/interface";
import { chatApi } from "@/connection";
import { useLocation } from "react-router-dom";

export default function SendReceiveMessagesPage() {
  const { pathname } = useLocation();
  let queryKey = "";
  let viewOption = "";
  if (pathname === "/chat/receive") {
    queryKey = "coffee-chat-receive";
    viewOption = "receive";
  } else if (pathname === "/chat/send") {
    queryKey = "coffee-chat-send";
    viewOption = "send";
  }
  console.log(viewOption);

  const { data: posts } = useQuery({
    queryKey: [`${queryKey}`],
    queryFn: () => chatApi.requests.get(`${viewOption}` as "send" | "receive"),
  });

  const { mutate } = useMutation({
    mutationFn: (variables: ChatResponse) =>
      chatApi.requests.patch(variables.id, variables.answer),
  });

  return (
    <SendReceiveMessages mutate={mutate} pathname={pathname} posts={posts} />
  );
}
