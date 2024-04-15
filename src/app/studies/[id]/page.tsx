import { useQuery } from "@tanstack/react-query";
import { Study } from "@/components";
import { communityApi } from "@/connection";
import { useParams } from "react-router-dom";

export default function StudyPage() {
  const { id } = useParams();
  const { data: post } = useQuery({
    queryKey: ["getStudy", id],
    queryFn: () => communityApi.study.get(parseInt(id ?? "0", 10)),
  });
  return <Study post={post} />;
}
