import { Questions } from "@/components/questions";
import { questionApi } from "@/connection";
import { useQueries } from "@tanstack/react-query";

export default function QuestionsPage() {
  const [{ data: questionsByViews }, { data: questionsLatest }] = useQueries({
    queries: [
      {
        queryKey: ["getQuestionsByViews"],
        queryFn: () => questionApi.getAll("views"),
      },
      {
        queryKey: ["getQuestionsByLatest"],
        queryFn: () => questionApi.getAll("latest"),
      },
    ],
  });

  return (
    <Questions
      questionByViews={questionsByViews}
      questionsLatest={questionsLatest}
    />
  );
}
