import { Communities } from "@/components";
import { communityApi } from "@/connection";
import { useQuery } from "@tanstack/react-query";

export default function CommunitiesPage() {
  const { data: posts } = useQuery({
    queryKey: ["getCommunitiesPosts"],
    queryFn: communityApi.getAll,
  });
  return <Communities posts={posts} />;
}
