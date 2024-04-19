import { userApi } from "@/connection";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { ChangePassword } from "@/components";

export default function ChangePasswordPage() {
  const navigate = useNavigate();
  const { mutate, isSuccess } = useMutation({
    mutationFn: userApi.patchPassword,
  });
  if (isSuccess) {
    alert("비밀번호가 변경되었습니다.");
  }

  return <ChangePassword patchPassword={mutate} />;
}
