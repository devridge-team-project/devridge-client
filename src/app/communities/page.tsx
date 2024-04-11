import { Communities } from "@/components";
import { communityApi } from "@/connection";
import { useQueries } from "@tanstack/react-query";

export default function CommunitiesPage() {
  const [{ data: posts }] = useQueries({
    queries: [
      {
        queryKey: ["getCommunitiesPosts"],
        queryFn: communityApi.getAll,
      },
    ],
  });
  return <Communities posts={posts} />;
}
