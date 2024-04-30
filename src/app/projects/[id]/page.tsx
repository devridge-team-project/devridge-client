import {
  useQueries,
  useMutation,
  useQueryClient,
  QueryFilters,
} from "@tanstack/react-query";
import { Project } from "@/components";
import { communityApi } from "@/connection";
import { useParams } from "react-router-dom";
import { useSignInStore } from "@/shared";
import { Answer } from "@/interface";

export default function ProjectPage() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const {
    signInData: { userId, nickname, introduction, imageUrl },
  } = useSignInStore();
  const projectKey = ["getProject", id];
  const projectAnswerKey = ["getProjectAnswers", id];
  const [{ data: post }, { data: answers }] = useQueries({
    queries: [
      {
        queryKey: projectKey,
        queryFn: () => communityApi.project.get(Number(id)),
      },
      {
        queryKey: projectAnswerKey,
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
    onMutate: async (variables) => {
      await queryClient.cancelQueries(projectAnswerKey as QueryFilters);
      const curcomments = queryClient.getQueriesData(
        projectAnswerKey as QueryFilters
      );
      queryClient.setQueryData(projectAnswerKey, (prev = []) => [
        {
          content: variables.content,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          likes: 0,
          dislikes: 0,
          id: answers ? answers[0].id + 1 : 1,
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
