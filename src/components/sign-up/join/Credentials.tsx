import { useMutation } from "@tanstack/react-query";
import { useWidgetStore, useSignUpStore } from "@/shared";
import { emailVerificationApi } from "@/connection";
import { Modal, Layout } from "@/design";
import { useEffect, useState } from "react";
import { Loading } from "@/design";

export default function Credentials() {
  const { setSignUpData } = useSignUpStore();
  const { setView, removeView, setModal } = useWidgetStore();
  const email = useState<string>("");
  const password = useState<string>("");
  const passwordConfirm = useState<string>("");

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationKey: ["credentials"],
    mutationFn: () => emailVerificationApi.post(email[0]),
  });

  useEffect(() => {
    setSignUpData({ email: email[0], password: password[0] });
  }, [email[0], password[0]]);
  useEffect(() => {
    if (isError) return setModal("failed");
    if (isSuccess) {
      removeView("credentials");
      return setView("authentication");
    }
  }, [isSuccess, isError]);

  const necessary =
    email[0] !== "" && password[0] !== "" && passwordConfirm[0] !== "";

  const handleButtonClick = () => {
    if (necessary) return mutate();
    return setModal("notNecessary");
  };

  return (
    <Layout.SignUp
      widgets={{
        shows: [
          ["notNecessary", <Modal.Alert script="그러지 말아다오" />],
          ["failed", <Modal.Alert script="유효하지 않은 이메일입니다." />],
          [isPending, <Loading.Script />],
        ],
      }}
      titles={{ title: "회원가입" }}
      inputs={[
        { title: "이메일", state: email },
        { title: "비밀번호", state: password },
        { title: null, state: passwordConfirm },
      ]}
      buttons={[["확인", handleButtonClick]]}
    />
  );
}
