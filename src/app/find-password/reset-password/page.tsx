import { ResetPassWord } from "@/components";
import { useNavigate, useLocation } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { userApi } from "@/connection";

export default function ResetPasswordPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    state: { email, token: tempJwt },
  } = location;
  const { mutate, isSuccess } = useMutation({
    mutationFn: (password: string) =>
      userApi.resetPassword({ password, email, tempJwt }),
  });
  if (isSuccess) {
    alert("비밀번호가 재설정되었습니다.");
    navigate("/");
  }
  return <ResetPassWord mutate={mutate} />;
}
