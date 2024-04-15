import { Messages } from "@/components";
import { chatApi } from "@/connection";
import { useQuery } from "@tanstack/react-query";

export default function Chat() {
  const { data: posts } = useQuery({
    queryKey: ["getMessages"],
    queryFn: chatApi.getAll,
  });
  return <Messages posts={posts} />;
}
