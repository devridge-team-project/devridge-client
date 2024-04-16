import { useQueries } from "@tanstack/react-query";
import { Study } from "@/components";
import { communityApi } from "@/connection";
import { useParams } from "react-router-dom";

export default function StudyPage() {
  const { id } = useParams();
  const [{ data: post }, { data: answers }] = useQueries({
    queries: [
      {
        queryKey: ["getStudy", id],
        queryFn: () => communityApi.study.get(Number(id)),
      },
      {
        queryKey: ["getStudyAnswers", id],
        queryFn: () => communityApi.study.answer.getAll(Number(id)),
      },
    ],
  });
  return (
    <Study
      post={post}
      answers={answers}
      createComment={() => {}}
      like={() => {}}
      coffeeChat={() => {}}
    />
  );
}
