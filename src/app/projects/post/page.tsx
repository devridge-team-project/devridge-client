import { useMutation, useQuery } from "@tanstack/react-query";
import { ProjectPost } from "@/components";
import { communityApi, skillApi } from "@/connection";
import { useNavigate } from "react-router-dom";

export default function ProjectPostPage() {
  const navigate = useNavigate();
  const { mutate, isSuccess } = useMutation({
    mutationKey: ["postProject"],
    mutationFn: communityApi.project.post,
  });
  const { data: skillInfo } = useQuery({
    queryKey: ["skill"],
    queryFn: skillApi.getAll,
  });
  if (isSuccess) {
    alert("커뮤니티 게시글 등록 성공");
    navigate("/projects");
  }

  return <ProjectPost projectPost={mutate} skillInfo={skillInfo} />;
}
