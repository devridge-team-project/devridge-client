import { CommentCardQuestionProps } from "@/interface";
import { cn } from "@/util";

export default function CommentCardQuestionDesign({
  id,
  createdAt,
  content,
}: CommentCardQuestionProps) {
  const container = {
    displays: "flex flex-col",
    sizes: "w-full max-w-120 ",
    paddings: "px-5 py-4",
    styles: "bg-white border-2 rounded-md",
  };
  return (
    <div className={cn(container)}>
      <div className="text-xxs">{createdAt}</div>
      <div className="text-xs font-bold">개발하는 호랑이</div>
      <div className="text-xxs">{content}</div>
    </div>
  );
}
