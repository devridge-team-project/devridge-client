import { useState } from "react";
import { Input, Button } from "@/design";
import { OnClick } from "@/interface";

export default function DeleteAccount({
  deleteUser,
  nickname,
}: {
  deleteUser: OnClick<string>;
  nickname: string;
}) {
  const password = useState<string>("");

  return (
    <div className="mx-8.75">
      <div>
        <div className={`text-1xl text-bright-purple font-bold`}>회원탈퇴</div>
        <div className="mt-7.5 text-2xl font-bold">
          <div>{nickname}님, </div>
          <div>정말 탈퇴하시겠습니까?</div>
        </div>
        <div className="mt-7.5">
          <Input
            type="password"
            state={password}
            placeholder="비밀번호를 입력해주세요"
          />
        </div>
        <div className="mt-7.5">
          <Button
            title="탈퇴하기"
            onClick={() => deleteUser(password[0])}
            options={{ size: "full" }}
          />
        </div>
      </div>
    </div>
  );
}
