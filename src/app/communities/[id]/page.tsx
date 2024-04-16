import { Community } from "@/components";
import { useQueries } from "@tanstack/react-query";
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

  return (
    <Community
      post={post}
      answers={answers}
      createComment={() => {}}
      like={() => {}}
      coffeeChat={() => {}}
    />
  );
}
