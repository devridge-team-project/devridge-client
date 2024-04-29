import { useMutation } from "@tanstack/react-query";
import { emailVerificationApi } from "@/connection";
import { useNavigate, useLocation } from "react-router-dom";
import { EmailAuth } from "@/components";
import { Token } from "@/interface";
export default function EmailAuthPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    state: { email },
  } = location;
  const { mutate, data, isSuccess } = useMutation({
    mutationFn: (code: string) =>
      emailVerificationApi.code.post(email, Number(code)),
  });

  if (isSuccess) {
    const { token } = data as Token;
    alert("이메일 인증 되었습니다.");
    navigate("/find-pw/reset-pw", { state: { email, token } });
  }

  return <EmailAuth mutate={mutate} />;
}
