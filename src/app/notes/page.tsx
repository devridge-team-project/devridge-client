import { NoteApi } from "@/connection";
import { useQuery } from "@tanstack/react-query";
import { Notes } from "@/components";

export default function NotesPage() {
  const { data: posts } = useQuery({
    queryKey: ["getNotes"],
    queryFn: NoteApi.getAll,
  });
  console.log(posts);
  return <Notes posts={posts} />;
}
