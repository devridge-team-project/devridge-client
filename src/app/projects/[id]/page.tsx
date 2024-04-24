import { useQueries, useMutation } from "@tanstack/react-query";
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
  const { mutate: like } = useMutation({
    mutationKey: ["postProjectLike", id],
    mutationFn: communityApi.project.likes.post,
  });
  const { mutate: scrap } = useMutation({
    mutationKey: ["postProjectScrap", id],
    mutationFn: communityApi.project.scraps.post,
  });

  const { mutate: postComment } = useMutation({
    mutationKey: ["postProjectComment", id],
    mutationFn: communityApi.project.answer.post,
  });
  return (
    <Project
      post={post}
      answers={answers}
      scrap={scrap}
      coffeeChat={() => {}}
      createComment={postComment}
      like={like}
    />
  );
}
