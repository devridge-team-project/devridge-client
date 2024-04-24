import { useQueries, useMutation } from "@tanstack/react-query";
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
  const { mutate: like } = useMutation({
    mutationKey: ["postStudyLike", id],
    mutationFn: communityApi.study.likes.post,
  });
  const { mutate: scrap } = useMutation({
    mutationKey: ["postStudyScrap", id],
    mutationFn: communityApi.study.scraps.post,
  });
  const { mutate: postComment } = useMutation({
    mutationKey: ["postStudyComment", id],
    mutationFn: communityApi.study.answer.post,
  });
  return (
    <Study
      post={post}
      answers={answers}
      coffeeChat={() => {}}
      createComment={postComment}
      scrap={scrap}
      like={like}
    />
  );
}
