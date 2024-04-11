import { useQueries } from "@tanstack/react-query";
import { communityApi } from "@/connection";
import { Projects } from "@/components";

export default function ProjectsPage() {
  const [{ data: posts }] = useQueries({
    queries: [
      {
        queryKey: ["getProjects"],
        queryFn: communityApi.project.getAll,
      },
    ],
  });
  return <Projects posts={posts} />;
}
