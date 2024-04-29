import { FindPassWord } from "@/components";
import { emailVerificationApi } from "@/connection";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export default function FindPassWordPage() {
  const navigate = useNavigate();
  const email = useState<string>("");
  const { mutate, isSuccess } = useMutation({
    mutationFn: emailVerificationApi.post,
  });

  if (isSuccess) {
    navigate("email-auth", { state: { email: email[0] } });
  }

  return <FindPassWord mutate={mutate} email={email} />;
}
