import { signApi } from "@/connection";
import { useMutation } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { DeleteAccount } from "@/components";
export default function DeletePage() {
  const navigate = useNavigate();
  const {
    state: { nickname },
  } = useLocation();
  const { mutate } = useMutation({
    mutationFn: signApi.delete,
    onSuccess: () => {
      alert("회원 탈퇴 되었습니다.");
      navigate("/");
    },
  });

  return <DeleteAccount deleteUser={mutate} nickname={nickname} />;
}
