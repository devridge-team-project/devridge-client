import { PostCardQuestionSimpleProps } from "@/interface";
import { cn } from "@/util";
import { Link } from "react-router-dom";

export default function PostCardQuestionSimpleDesign({
  id,
  index,
  title,
  views,
  commentCount,
}: PostCardQuestionSimpleProps) {
  const container = {
    sizes: "w-full h-17.5",
    displays: "flex justify-center items-center",
  };
  const body = {
    container: {
      sizes: "w-full max-w-80 h-17.25",
      displays: "flex items-center gap-3.75",
      border: index !== 1 && "border-t-2 border-white-grey",
    },
    counter: {
      displays: "flex justify-center items-center",
      sizes: "w-6.25 h-6.25",
      styles: "rounded-sm bg-dark-grey text-white",
    },
  };
  return (
    <div className={cn(container)}>
      <Link to={`/questions/${id}`} className={cn(body.container)}>
        <div className={cn(body.counter)}>{index}</div>
        <div>
          <div className="text-xs font-bold">{title}</div>
          <div className="text-xxs ">
            답변수 {commentCount} 조회수 {views}
          </div>
        </div>
      </Link>
    </div>
  );
}
