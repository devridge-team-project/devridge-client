import { Community } from "@/components";
import { useQueries, useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { communityApi } from "@/connection";
export default function CommunityPage() {
  const { id } = useParams();
  const [{ data: post }, { data: answers }] = useQueries({
    queries: [
      {
        queryKey: ["getCommunity", id],
        queryFn: () => communityApi.get(Number(id)),
      },
      {
        queryKey: ["getCommunityAnswers", id],
        queryFn: () => communityApi.answer.getAll(Number(id)),
      },
    ],
  });

  const { mutate: postComment } = useMutation({
    mutationKey: ["postCommunityComment", id],
    mutationFn: communityApi.answer.post,
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
