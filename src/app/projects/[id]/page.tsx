import { useQueries } from "@tanstack/react-query";
import { Project } from "@/components";
import { communityApi } from "@/connection";
import { useParams } from "react-router-dom";

export default function ProjectPage() {
  const { id } = useParams();
  const [{ data: post }, { data: answers }] = useQueries({
    queries: [
      {
        queryKey: ["getProject", id],
        queryFn: () => communityApi.project.get(Number(id)),
      },
      {
        queryKey: ["getStudyAnswers", id],
        queryFn: () => communityApi.project.answer.getAll(Number(id)),
      },
    ],
  });
  return (
    <Project
      post={post}
      answers={answers}
      createComment={() => {}}
      like={() => {}}
      coffeeChat={() => {}}
    />
  );
}
