import { Questions } from "@/components/questions";
import { questionApi } from "@/connection";
import { Events, Loading } from "@/design";
import { useQueries } from "@tanstack/react-query";

export default function QuestionsPage() {
  const [
    { data: questionsByViews, isLoading: loading1 },
    { data: questionsLatest, isLoading: loading2 },
  ] = useQueries({
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
  const isLoading = loading1 || loading2;
  return (
    <Events.Replace widgets={[[isLoading, <Loading.Spinner />]]}>
      <Questions
        questionByViews={questionsByViews}
        questionsLatest={questionsLatest}
      />
    </Events.Replace>
  );
}
