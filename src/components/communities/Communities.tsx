import { PostCard } from "@/design";
import { Community } from "@/interface";
import { cn } from "@/util";

export default function Communities({ posts }: { posts?: Community[] }) {
  const container = {
    displays: "flex flex-col gap-2",
    paddings: "pb-2",
    styles: "bg-white-off",
  };
  return (
    <div className={cn(container)}>
      <div className="bg-white w-full h-24" />
      {posts?.map((post) => (
        <PostCard.Community
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          createdAt={post.createdAt}
          likes={post.likeCount}
          views={post.viewCount}
          commentCount={post.comments}
          member={post.member}
        />
      ))}
    </div>
  );
}
