import { PostCard } from "@/design";
import { cn } from "@/util";
export default function Questions() {
  const header = {
    container: {
      displays: "flex justify-center items-center",
      sizes: "w-full h-15.5",
      styles: "bg-white",
    },
    body: "w-full max-w-80 font-bold flex items-center gap-1.5",
  };
  return (
    <div className="px-4">
      <div className={cn(header.container)}>
        <div className={cn(header.body)}>
          <div>오늘의 조회수 TOP 5</div>
          <img src="/images/icons/fire.svg" />
        </div>
      </div>
      <PostCard.Question.Simple index={0} />
      <PostCard.Question.Simple index={1} />
    </div>
  );
}
