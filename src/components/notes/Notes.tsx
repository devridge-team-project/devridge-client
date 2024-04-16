import { Notes } from "@/interface";
import { PostCard } from "@/design";
import { cn } from "@/util";
export default function NoteList({ posts }: { posts?: Notes[] }) {
  const header = {
    positions: "fixed top-35 left-0",
    sizes: "w-full h-37",
    styles: "bg-white",
  };
  const container = {
    display: "flex flex-col gap-2.5",
    styles: "bg-white",
  };
  console.log(posts);
  return (
    <div className={cn(header)}>
      <div className="pl-9 flex items-center w-full h-13 font-bold text-xl border-b ">
        쪽지
      </div>
      <div className={cn(container)}>
        {posts?.map((note) => (
          <PostCard.Note key={note.id} {...note} />
        ))}
      </div>
    </div>
  );
}
