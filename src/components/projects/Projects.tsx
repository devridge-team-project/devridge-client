import { Project } from "@/interface";
import { cn } from "@/util";
import { Link } from "react-router-dom";
import { PostCard } from "@/design";

export default function Projects({ posts }: { posts?: Project[] }) {
  const header = {
    positions: "fixed top-35 left-0",
    sizes: "w-full h-77",
    styles: "bg-white border-b border-bright-gray",
  };
  const block = {
    sizes: header.sizes,
    styles: "bg-white-off",
  };

  return (
    <>
      <div className={cn(header)}>
        <div className="pl-9 flex items-center gap-5 w-full h-13 border-b font-bold">
          <Link to="/communities">자유게시판</Link>
          <Link to="/projects" className="text-bright-purple">
            프로젝트
          </Link>
        </div>
        <div className="w-full h-64 flex flex-col justify-center items-center">
          <div className="flex flex-col items-center font-bold text-xl">
            <div>데브릿지에서 프로젝트를 함께할</div>
            <div>팀원을 구해보세요!</div>
          </div>
          <div className="flex flex-col items-center text-sm text-bright-gray pt-5 pb-9">
            <div>사이드 프로젝트 멤버를 찾거나</div>
            <div>다양한 목적의 모집글을 올릴 수 있어요!</div>
          </div>
          <button className="bg-bright-purple w-80 h-12.5 rounded-md text-white">
            모집글 작성하기
          </button>
        </div>
      </div>
      <div className={cn(block)} />
      {posts?.map((post) => (
        <PostCard.Project key={post.id} {...post} />
      ))}
    </>
  );
}
