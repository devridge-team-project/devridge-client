import { PostCardQuestionProps } from "@/interface";
import { cn } from "@/util";
import { Link } from "react-router-dom";

export default function PostCardQuestionDesign({
  id,
  title,
  content,
  views,
  likes,
  commentCount,
  createdAt,
}: PostCardQuestionProps) {
  const container = {
    sizes: "w-full h-24.5",
    displays: "flex justify-center items-center",
    styles: "bg-white border-b",
  };
  const body = {
    displays: "flex flex-col justify-between",
    sizes: "w-80 h-20",
  };
  return (
    <div className={cn(container)}>
      <Link to={`/questions/${id}`} className={cn(body)}>
        <div className="flex flex-col">
          <div className="text-xxs">{createdAt}</div>
          <div className="text-xs font-bold">{title}</div>
          <div className="text-xxs truncate">{content}</div>
        </div>
        <div className="flex justify-between text-xxs">
          <div className="flex gap-2.5">
            <div className="min-w-8">답변수 {commentCount}</div>
            <div>조회수 {views}</div>
          </div>
          <div>추천 {likes}</div>
        </div>
      </Link>
    </div>
  );
}
