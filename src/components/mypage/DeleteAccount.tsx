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
    <div>
      <div>
        <div>회원탈퇴</div>
        <div>{nickname}님 정말 탈퇴하시겠습니까?</div>
        <Input
          type="password"
          state={password}
          placeholder="비밀번호를 입력해주세요"
        />
        <Button
          title="탈퇴하기"
          onClick={() => deleteUser(password[0])}
          options={{ size: "full" }}
        />
      </div>
    </div>
  );
}
