import { useState } from "react";
import { Input, Button } from "@/design";
import { OnClick } from "@/interface";
export default function ChangePassword({
  patchPassword,
}: {
  patchPassword: OnClick<string>;
}) {
  const password = useState<string>("");
  const newPassword = useState<string>("");
  const newPasswordCheck = useState<string>("");

  return (
    <div>
      <div>
        <div className="font-bold">비밀번호 변경</div>
        <div className="mt-5 font-bold">기존 비밀번호</div>
        <Input
          type="password"
          state={password}
          placeholder="비밀번호를 입력해주세요"
        />
        <div className="mt-2.5 font-bold">새 비밀번호</div>
        <Input
          type="password"
          state={newPassword}
          placeholder="숫자,영문자 포함 8자이상"
        />
        <Input
          type="password"
          state={newPasswordCheck}
          placeholder="비밀번호 확인"
        />
        <Button
          title="변경하기"
          onClick={() => patchPassword(newPassword[0])}
          options={{ size: "full" }}
        />
      </div>
    </div>
  );
}
