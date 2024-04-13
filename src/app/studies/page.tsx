import { Studies } from "@/components";
import { communityApi } from "@/connection";
import { useQuery } from "@tanstack/react-query";
export default function StudiesPage() {
  const { data: posts } = useQuery({
    queryKey: ["getStudies"],
    queryFn: communityApi.study.getAll,
  });
  return <Studies posts={posts} />;
}
