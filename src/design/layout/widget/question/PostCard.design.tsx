import { cn } from "@/util";

export default function PostCard() {
  const container = {
    displays: "flex flex-col justify-between items-start",
    sizes: "w-full h-20",
    styles: "border-2",
  };

  return (
    <div className={cn(container)}>
      <div className="h-11 w-full">
        <div>한시간전-김고성질문</div>
        <div></div>
        <div></div>
      </div>
      <div>답변수</div>
    </div>
  );
}
