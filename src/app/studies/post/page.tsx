import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { communityApi } from "@/connection";
import { StudyPost } from "@/components";

export default function StudyPostPage() {
  const navigate = useNavigate();
  const { mutate, isSuccess } = useMutation({
    mutationKey: ["postStudy"],
    mutationFn: communityApi.study.post,
  });
  if (isSuccess) {
    alert("스터디 게시글 등록 성공");
    navigate("/studies");
  }

  return <StudyPost studyPost={mutate} />;
}
