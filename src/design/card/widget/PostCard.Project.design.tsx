import { PostCardProjectProps } from "@/interface";
import { cn } from "@/util";
import { Link } from "react-router-dom";
export default function PostCardProjectDesign({
  id,
  title,
  content,
  isRecruiting,
}: PostCardProjectProps) {
  const container = {
    displays: "flex justify-center items-center",
    sizes: "w-full h-33.25 ",
    styles: "border-b border-bright-gray px-8",
  };
  const body = {
    sizes: "w-full min-w-80 h-23.25",
  };
  const tagBox = {
    displays: "flex justify-center items-center",
    sizes: "w-13.5 h-3 ",
    fonts: " text-bright-purple text-6px font-bold",
    styles: "bg-bright-purple/25 rounded-sm",
  };
  const titleBox = {
    recruiting: {
      sizes: "w-14",
      styles: "border-r",
      color: isRecruiting ? "text-bright-purple" : "text-brown-gray",
    },
    title: {
      sizes: "w-full min-w-58",
      styles: "pl-2 truncate",
    },
  };
  const contentBox = {
    displays: "flex",
    sizes: "w-full min-w-80 h-16 pt-1.25",
    fonts: "text-xxs",
    styles: "line-clamp-4",
  };
  return (
    <Link to={`/projects/${id}`} className={cn(container)}>
      <div className={cn(body)}>
        <div className={cn(tagBox)}>사이드 프로젝트</div>
        <div className="flex font-bold pt-1 ">
          <div className={cn(titleBox.recruiting)}>
            {isRecruiting ? "모집 중" : "모집 완료"}
          </div>
          <div className={cn(titleBox.title)}>{title} </div>
        </div>
        <div className={cn(contentBox)}>{content}</div>
      </div>
    </Link>
  );
}
