import { cn } from "@/util";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  roles: string | null;
}

export default function Projects() {
  const header = {
    positions: "fixed top-35 left-0",
    sizes: "w-full h-37",
    styles: "bg-white",
  };
  const block = {
    sizes: "w-full h-39",
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
    </>
  );
}
