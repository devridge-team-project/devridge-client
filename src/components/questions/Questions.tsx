import { PostCard } from "@/design";
import { Question } from "@/interface";
import { cn } from "@/util";
export default function Questions({
  questionByViews,
  questionsLatest,
}: {
  questionByViews?: Question[];
  questionsLatest?: Question[];
}) {
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
    <div className="pb-16">
      <div className={cn(rankHeader.container)}>
        <div className={cn(rankHeader.body)}>
          <div>오늘의 조회수 TOP 5</div>
          <img src="/images/icons/fire.svg" />
        </div>
      </div>
      {questionByViews?.map((question, index) => (
        <PostCard.Question.Simple
          key={question.id}
          index={index + 1}
          {...question}
        />
      ))}
      <div className={cn(recentHeader.container)}>
        <div className={cn(recentHeader.body)}>최신 글 보기</div>
      </div>
      {questionsLatest?.map((question) => (
        <div key={question.id}>
          <PostCard.Question {...question} />
        </div>
      ))}
    </div>
  );
}
