import { useQuery } from "@tanstack/react-query";
import { Project } from "@/components";
import { communityApi } from "@/connection";
import { useParams } from "react-router-dom";

export default function ProjectPage() {
  const { id } = useParams();
  const { data: post } = useQuery({
    queryKey: ["getProject", id],
    queryFn: () => communityApi.project.get(parseInt(id ?? "0", 10)),
  });
  return <Project post={post} />;
}
