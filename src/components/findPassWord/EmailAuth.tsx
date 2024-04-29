import { useState } from "react";

import { OnClick } from "@/interface";
import { Timer, Input, Button } from "@/design";

export default function EmailAuth({ mutate }: { mutate: OnClick<string> }) {
  const code = useState<string>("");

  return (
    <div className="mx-8.75">
      <div className="text-2xl text-bright-purple font-bold">인증하기</div>
      <div className="flex relative mt-7.5">
        <Input
          type="password"
          state={code}
          placeholder="인증번호를 입력해주세요"
        />
        <Timer />
      </div>
      <div className="mt-7.5">
        <Button
          title="인증하기"
          onClick={() => mutate(code[0])}
          options={{ size: "full" }}
        />
      </div>
    </div>
  );
}
