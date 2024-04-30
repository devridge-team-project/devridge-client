import {
  useQueries,
  useMutation,
  useQueryClient,
  QueryKey,
  QueryFilters,
} from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { communityApi } from "@/connection";
import { Community } from "@/components";
import { Answer } from "@/interface";
import { useSignInStore } from "@/shared";

export default function CommunityPage() {
  const queryClient = useQueryClient();
  const {
    signInData: { userId, nickname, introduction, imageUrl },
  } = useSignInStore();
  const { id } = useParams();
  const communityKey = ["getCommunity", id] as QueryFilters;
  const communityAnswerKey = ["getCommunityAnswers", id];

  const [{ data: post }, { data: answers }] = useQueries({
    queries: [
      {
        queryKey: communityKey as QueryKey,
        queryFn: () => communityApi.get(Number(id)),
      },
      {
        queryKey: communityAnswerKey,
        queryFn: () => communityApi.answer.getAll(Number(id)),
      },
    ],
  });

  const { mutate: postComment } = useMutation({
    mutationKey: ["postCommunityComment", id],
    mutationFn: communityApi.answer.post,
    onMutate: async ({ content }) => {
      await queryClient.cancelQueries(communityKey);
      const curcomments = queryClient.getQueriesData(communityKey);
      queryClient.setQueriesData(communityKey, (prev = []) => [
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

  const { mutate: like } = useMutation({
    mutationKey: ["postCommunityLike", id],
    mutationFn: communityApi.likes.post,
  });
  const { mutate: scrap } = useMutation({
    mutationKey: ["postCommunityScrap", id],
    mutationFn: communityApi.scraps.post,
  });

  return (
    <Community
      post={post}
      answers={answers}
      createComment={postComment}
      like={like}
      scrap={scrap}
    />
  );
}
