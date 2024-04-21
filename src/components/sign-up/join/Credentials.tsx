import { useMutation } from "@tanstack/react-query";
import { useWidgetStore, useSignUpStore } from "@/shared";
import { emailVerificationApi } from "@/connection";
import { Modal, Layout } from "@/design";
import { useEffect, useState } from "react";
import { Loading } from "@/design";

export default function Credentials() {
  const { setSignUpData } = useSignUpStore();
  const { setView, removeView, setModal } = useWidgetStore();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationKey: ["credentials"],
    mutationFn: () => emailVerificationApi.post(email),
  });

  useEffect(() => {
    setSignUpData({ email, password });
  }, [email]);
  useEffect(() => {
    if (isError) return setModal("failed");
    if (isSuccess) {
      removeView("credentials");
      return setView("authentication");
    }
  }, [isSuccess, isError]);

  const necessary = email !== "" && password !== "" && passwordConfirm !== "";

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
        { title: "이메일", state: [email, setEmail] },
        { title: "비밀번호", state: [password, setPassword] },
        { title: null, state: [passwordConfirm, setPasswordConfirm] },
      ]}
      buttons={[["확인", handleButtonClick]]}
    />
  );
}
