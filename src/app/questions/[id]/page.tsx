import { useParams } from "react-router-dom";
import { useQueries } from "@tanstack/react-query";
import { questionApi } from "@/connection";
import { Question } from "@/components/questions";

export default function QuestionPage() {
  const { id } = useParams();
  const [{ data: post }] = useQueries({
    queries: [
      {
        queryKey: ["getQuestionById"],
        queryFn: () => questionApi.get(parseInt(id ?? "0", 10)),
      },
    ],
  });

  return <Question post={post} />;
}
