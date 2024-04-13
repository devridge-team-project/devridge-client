import { Button, Input } from "@/design";
import { cn } from "@/util";
import { useState } from "react";
import { useNavigation } from "@/hook";
import { auths } from "@/assets";

export default function SignIn() {
  const navigation = useNavigation();
  const state = useState("");
  const container = {
    displays: "flex justify-center items-center",
    paddings: "px-4 pt-24",
  };
  const body = {
    displays: "flex flex-col gap-2.5",
    sizes: "w-full max-w-100",
  };
  const bottomBox = {
    displays: "flex flex-col justify-center items-center gap-2.5",
    styles: " pt-20 font-bold text-dark-gray",
  };
  return (
    <div className={cn(container)}>
      <div className={cn(body)}>
        <div className="text-3xl text-bright-purple font-bold">로그인</div>
        <Input state={state} />
        <Input state={state} />
        <Button title="로그인" options={{ size: "full" }} />
        <div className="flex w-full justify-end">
          <button>비밀번호 찾기</button>
        </div>
        <div className={cn(bottomBox)}>
          <div>다른 계정으로 로그인하기</div>
          <div className="flex gap-5">
            {auths.map(({ icon }) => (
              <img src={`/images/icons/${icon}`} />
            ))}
          </div>
          <div className="flex gap-2.5 mt-5">
            <div>아직 계정이 없으신가요?</div>
            <button
              onClick={() => navigation("/sign-up")}
              className="text-bright-purple"
            >
              가입하러 가기 {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
