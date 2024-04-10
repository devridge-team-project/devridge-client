import { Communities } from "@/components/communities";
import { communityApi } from "@/connection";
import { useQueries } from "@tanstack/react-query";

export default function CommunitiesPage() {
  const [{ data: communityData }] = useQueries({
    queries: [
      {
        queryKey: ["getCommunitiesPosts"],
        queryFn: communityApi.getAll,
      },
    ],
  });
  return <Communities data={communityData} />;
}
