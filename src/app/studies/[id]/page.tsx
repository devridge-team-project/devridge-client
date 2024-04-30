import {
  useQueries,
  useMutation,
  useQueryClient,
  QueryFilters,
} from "@tanstack/react-query";
import { Study } from "@/components";
import { communityApi } from "@/connection";
import { useParams } from "react-router-dom";
import { useSignInStore } from "@/shared";
import { Answer } from "@/interface";

export default function StudyPage() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const studyKey = ["getStudy", id];
  const studyAnswerKey = ["getStudyAnswers", id];
  const {
    signInData: { userId, nickname, introduction, imageUrl },
  } = useSignInStore();
  const [{ data: post }, { data: answers }] = useQueries({
    queries: [
      {
        queryKey: studyKey,
        queryFn: () => communityApi.study.get(Number(id)),
      },
      {
        queryKey: studyAnswerKey,
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
    onMutate: async ({ content }) => {
      await queryClient.cancelQueries(studyAnswerKey as QueryFilters);
      const curcomments = queryClient.getQueryData(studyAnswerKey);
      queryClient.setQueryData(studyAnswerKey, (prev = []) => [
        {
          content,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          likes: 0,
          dislikes: 0,
          id: 1,
          member: {
            profileImageUrl: imageUrl,
            introduction,
            id: userId,
            nickname,
          },
        },
        ...(prev as Answer[]),
      ]);
      return { curcomments };
    },
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
