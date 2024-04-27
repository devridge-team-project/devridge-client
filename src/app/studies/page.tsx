import { Studies } from "@/components";
import { communityApi } from "@/connection";
import { LoadingSpinner } from "@/design";
import { useQuery } from "@tanstack/react-query";

export default function StudiesPage() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["getStudies"],
    queryFn: communityApi.study.getAll,
  });
  if (isLoading) return <LoadingSpinner />;
  return <Studies posts={posts} />;
}
