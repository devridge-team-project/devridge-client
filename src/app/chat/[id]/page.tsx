import { useQuery } from "@tanstack/react-query";
import { Message } from "@/components";
import { chatApi } from "@/connection";
import { useParams } from "react-router-dom";

export default function PrivateChatPage() {
  const { id } = useParams();
  const { data: posts } = useQuery({
    queryKey: ["Message", id],
    queryFn: () => chatApi.get(Number(id)),
  });
  return <Message id={Number(id)} posts={posts} />;
}
