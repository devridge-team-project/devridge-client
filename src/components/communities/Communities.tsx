import { PostCard } from "@/design";
import { Community } from "@/interface";
import { cn } from "@/util";
import { Link } from "react-router-dom";

export default function Communities({ posts }: { posts?: Community[] }) {
  const container = {
    displays: "flex flex-col gap-2",
    paddings: "pb-2",
    styles: "bg-white-off",
  };
  const header = {
    positions: "fixed top-35 left-0",
    sizes: "w-full h-37",
    styles: "bg-white",
  };
  const block = {
    sizes: "w-full h-39",
    styles: "bg-white-off",
  };
  console.log(posts);

  return (
    <>
      <div className={cn(header)}>
        <div className="pl-9 flex items-center gap-5 w-full h-13 border-b font-bold">
          <Link to="/communities" className="text-bright-purple">
            자유게시판
          </Link>
          <Link to="/projects">프로젝트</Link>
          <Link to="/studies">스터디</Link>
        </div>
        <div className="w-full h-24 flex justify-center items-center">
          <div className="relative w-80 h-15 flex items-center">
            <input
              className="w-full h-full rounded-full border focus:outline-none pl-8"
              placeholder="자유롭게 의견을 공유해봐요!"
            />
            <img
              src="/images/icons/writing-gray.svg"
              className="absolute right-6.25"
            />
          </div>
        </div>
      </div>
      <div className={cn(block)} />
      <div className={cn(container)}>
        {posts?.map((post) => (
          <PostCard.Community
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            createdAt={post.createdAt}
            likes={post.likes}
            views={post.views}
            commentCount={post.comments}
            member={post.member}
          />
        ))}
      </div>
    </>
  );
}
