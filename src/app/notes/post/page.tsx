import { useMutation } from "@tanstack/react-query";
import { NotePost } from "@/components";
import { NoteApi } from "@/connection";
import { useNavigate, useLocation } from "react-router-dom";

export default function NotePostPage() {
  const navigate = useNavigate();
  const {
    state: { id },
  } = useLocation();
  const { mutate, isSuccess } = useMutation({
    mutationKey: ["postNote"],
    mutationFn: NoteApi.post,
  });
  if (isSuccess) {
    alert("쪽지 보내기 성공");
    navigate("/notes");
  }

  return <NotePost receiverId={id} notePost={mutate} />;
}
