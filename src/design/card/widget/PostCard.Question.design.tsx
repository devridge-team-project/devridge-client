import { cn } from "@/util";

export default function PostCardQuestionDesign() {
  const container = {
    sizes: "w-full h-24.5",
    displays: "flex justify-center items-center",
    styles: "bg-white",
  };
  const body = {
    displays: "flex flex-col justify-between",
    sizes: "w-80 h-20",
  };
  return (
    <div className={cn(container)}>
      <div className={cn(body)}>
        <div className="flex flex-col">
          <div className="text-xxs">한시간전</div>
          <div className="text-xs font-bold">This is title</div>
          <div className="text-xxs truncate">This is Content</div>
        </div>
        <div className="flex justify-between text-xxs">
          <div className="flex gap-2.5">
            <div className="min-w-8">답변수</div>
            <div>조회수</div>
          </div>
          <div>추천</div>
        </div>
      </div>
    </div>
  );
}
