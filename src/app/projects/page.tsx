import { useQuery } from "@tanstack/react-query";
import { communityApi } from "@/connection";
import { Projects } from "@/components";
import { LoadingSpinner } from "@/design";

export default function ProjectsPage() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["getProjects"],
    queryFn: communityApi.project.getAll,
  });
  if (isLoading) return <LoadingSpinner />;
  return <Projects posts={posts} />;
}
