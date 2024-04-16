import { NoteApi } from "@/connection";
import { useQuery } from "@tanstack/react-query";
import { useParams, useLocation } from "react-router-dom";
import { Note } from "@/components";
export default function NotePage() {
  const { id } = useParams();
  const {
    state: { nickname, receiverId },
  } = useLocation();
  const { data: posts } = useQuery({
    queryKey: ["getNote", id],
    queryFn: () => NoteApi.get(Number(id)),
  });
  return <Note nickname={nickname} receiverId={receiverId} posts={posts} />;
}
