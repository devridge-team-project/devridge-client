import { PostCard } from "@/design";
import { Notice } from "@/interface";
import { cn } from "@/util";

export default function Notices({ posts }: { posts: Notice[] }) {
  const container = {
    display: "flex flex-col gap-2.5",
    styles: "bg-white-off",
  };
  return (
    <div className={cn(container)}>
      {posts.map((notice) => (
        <PostCard.Notice key={notice.id} {...notice} />
      ))}
    </div>
  );
}
