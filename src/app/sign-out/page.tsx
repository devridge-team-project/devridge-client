import { useEffect } from "react";
import { useSignUpStore } from "@/shared";
import { signApi } from "@/connection";
import { useMutation } from "@tanstack/react-query";

const SignOut = () => {
  const { setSignUpData } = useSignUpStore();
  const { mutate } = useMutation({
    mutationKey: ["logout"],
    mutationFn: signApi.out,
  });

  useEffect(() => {
    (async () => {
      setSignUpData({ isSignedIn: false });
      mutate();
      alert("로그아웃 되었습니다.");
      window.location.href = "/";
    })();
  }, []);

  return null;
};

export default SignOut;
