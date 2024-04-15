import { Community } from "@/components";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { communityApi } from "@/connection";
export default function CommunityPage() {
  const { id } = useParams();
  const { data: post } = useQuery({
    queryKey: ["getCommunity", id],
    queryFn: () => communityApi.get(Number(id)),
  });
  return <Community post={post} />;
}
