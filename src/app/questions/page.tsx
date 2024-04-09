import { PostCard } from "@/design";
import { cn } from "@/util";
export default function Questions() {
  const rankHeader = {
    container: {
      displays: "flex justify-center items-center",
      sizes: "w-full h-15.5",
      styles: "bg-white border-b-2 border-white-grey",
    },
    body: "w-full max-w-80 font-bold flex items-center gap-1.5",
  };
  const recentHeader = {
    container: {
      displays: "flex justify-center items-center",
      sizes: "w-full h-15.5",
      styles: "bg-white border-b-2 border-white-grey",
    },
    body: "w-full max-w-80 font-bold",
  };
  return (
    <div>
      <div className={cn(rankHeader.container)}>
        <div className={cn(rankHeader.body)}>
          <div>오늘의 조회수 TOP 5</div>
          <img src="/images/icons/fire.svg" />
        </div>
      </div>
      <PostCard.Question.Simple index={1} />
      <PostCard.Question.Simple index={2} />
      <PostCard.Question.Simple index={3} />
      <PostCard.Question.Simple index={4} />
      <PostCard.Question.Simple index={5} />
      <div className={cn(recentHeader.container)}>
        <div className={cn(recentHeader.body)}>최신 글 보기</div>
      </div>
      <PostCard.Question />
    </div>
  );
}
