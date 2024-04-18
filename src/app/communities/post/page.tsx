import { useMutation } from "@tanstack/react-query";
import { CommunityPost } from "@/components";
import { communityApi } from "@/connection";
import { useNavigate } from "react-router-dom";

export default function CommunityPostPage() {
  const navigate = useNavigate();
  const { mutate, isSuccess } = useMutation({
    mutationKey: ["postCommunity"],
    mutationFn: communityApi.post,
  });
  if (isSuccess) {
    alert("커뮤니티 게시글 등록 성공");
    navigate("/communities");
  }

  return <CommunityPost communityPost={mutate} />;
}
