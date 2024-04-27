import { Communities } from "@/components";
import { communityApi } from "@/connection";
import { LoadingSpinner } from "@/design";
import { useQuery } from "@tanstack/react-query";

export default function CommunitiesPage() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["getCommunitiesPosts"],
    queryFn: communityApi.getAll,
  });
  if (isLoading) return <LoadingSpinner />;
  return <Communities posts={posts} />;
}
