import { Button, PostCard } from "@/design";
import { Study } from "@/interface";
import { cn } from "@/util";
import { Link, useNavigate } from "react-router-dom";

export default function Studies({ posts }: { posts?: Study[] }) {
  const navigate = useNavigate();
  const container = {
    displays: "flex flex-wrap",
    paddings: "mx-8.75 mt-40",
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
        {posts?.map(({ id, category, title, content, location }) => {
          return (
            <div
              className={`h-40 w-6/12 border-2 box-border border-gray-200 mt-2.5 p-2.5`}
            >
              <Link to={`${id}`}>
                <div className="w-20 bg-white-purple border-r-2 text-center text-xxs text-bright-purple">
                  {category}
                </div>
                <div className="text-bold text-xxs mt-[11px]">{title}</div>
                <div className="text-xxs mt-[9px]">{content}</div>
                <div className="mt-[13.5px] flex">
                  <div className="text-xxs mr-[7px] text-bright-purple font-bold">
                    위치
                  </div>
                  <div className="text-xxs">{location}</div>
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
