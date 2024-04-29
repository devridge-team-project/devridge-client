import { useState } from "react";
import { Tag, Button, Input } from "@/design";
import { OnClick } from "@/interface";

export default function ResetPassWord({ mutate }: { mutate: OnClick<string> }) {
  const password = useState<string>("");
  const passwordCheck = useState<string>("");

  return (
    <div className="mx-8.75">
      <div>
        <div className="text-2xl text-bright-purple font-bold">
          비밀번호 재설정
        </div>
        <div className="mt-7.5">
          <Tag title="새 비밀번호" />
          <Input
            type="password"
            state={password}
            placeholder="비밀번호를 입력해주세요"
          />
        </div>
        <div className="mt-2.5">
          <Input
            type="password"
            state={passwordCheck}
            placeholder="비밀번호 확인"
          />
        </div>
        <div className="mt-7.5">
          <Button
            title="변경하기"
            onClick={() => mutate(password[0])}
            options={{ size: "full" }}
          />
        </div>
      </div>
    </div>
  );
}
