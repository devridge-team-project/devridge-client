import { Button, Input } from "@/design";
import { OnClick } from "@/interface";
import { Dispatch, SetStateAction } from "react";

export default function HelpPw({
  mutate,
  email,
}: {
  mutate: OnClick<string>;
  email: [string, Dispatch<SetStateAction<string>>];
}) {
  return (
    <div className="mx-8.75">
      <div className="text-2xl text-bright-purple font-bold">비밀번호 찾기</div>
      <div className="mt-7.5">
        <Input state={email} placeholder="이메일을 입력해주세요" />
      </div>
      <div className="mt-7.5">
        <Button
          title="비밀번호 재설정 이메일 인증번호 받기"
          onClick={() => mutate(email[0])}
          options={{ size: "full" }}
        />
      </div>
    </div>
  );
}
