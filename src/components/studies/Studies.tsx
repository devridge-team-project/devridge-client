import { Button, PostCard } from "@/design";
import { Study } from "@/interface";
import { cn } from "@/util";
import { Link, useNavigate } from "react-router-dom";

export default function Studies({ posts }: { posts?: Study[] }) {
  const navigate = useNavigate();
  const container = {
    displays: "flex justify-center flex-wrap",
    paddings: "mt-40",
    styles: "bg-white",
  };
  const header = {
    positions: "fixed top-35 left-0",
    sizes: "w-full h-37",
    styles: "bg-white",
  };

  console.log(posts);

  return (
    <>
      <div className={cn(header)}>
        <div className="pl-9 flex items-center gap-5 w-full h-13 border-b font-bold">
          <Link to="/communities">자유게시판</Link>
          <Link to="/projects">프로젝트</Link>
          <Link to="/studies" className="text-bright-purple">
            스터디
          </Link>
        </div>
      </div>
      <div className={cn(container)}>
        {posts?.map(({ id, category, title, content, location }, idx) => {
          return (
            <div
              className={`h-40 w-5/12 border-[1px] border-gray-200 mt-2.5 pt-2.5 pl-3 pr-3.5 ${
                idx % 2 === 0 ? "mr-2.5" : ""
              } `}
            >
              <Link to={`${id}`}>
                <div className="bg-white-purple border-r-2 text-center text-[6px] text-purple w-12.5 h-3  text-center">
                  {category}
                </div>
                <div className="text-bold text-xxs mt-[11px]">{title}</div>
                <div className="text-[7px] mt-[9px]">{content}</div>
                <div className="mt-[13.5px] flex">
                  <div className="text-[9px] mr-[7px] text-bright-purple font-bold">
                    위치
                  </div>
                  <div className="text-[9px]">{location}</div>
                </div>
                <div className="mt-[5px] flex ">
                  <div className="text-[9px] mr-[7px] text-bright-purple font-bold">
                    현재인원
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
        <Button.Float
          image="/images/icons/writing-white.svg"
          onClick={() => {
            navigate("post");
          }}
        />
      </div>
    </>
  );
}
