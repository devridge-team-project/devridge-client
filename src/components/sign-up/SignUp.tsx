import { auths } from "@/assets";
import { cn } from "@/util";
import { Link } from "react-router-dom";

export default function SignUp() {
  const container = {
    displays: "flex justify-center items-center",
    paddings: "px-4 pt-24",
  };
  const body = {
    displays: "flex flex-col gap-2.5",
    sizes: "w-full max-w-100",
  };
  const iconBox = {
    displays: "flex justify-center items-center",
    sizes: "w-12.5 h-12.5 p-3",
  };
  return (
    <div className={cn(container)}>
      <div className={cn(body)}>
        <div className="text-3xl text-bright-purple font-bold mb-5">
          회원가입 방식
        </div>
        {auths.map(({ name, script, icon, styles }) => (
          <Link
            to="#"
            className={cn(
              styles,
              "relative flex justify-center items-center w-full h-13.75 rounded-lg"
            )}
          >
            <img
              className={cn(
                name === "google" ? cn(iconBox) : "",
                "absolute left-4"
              )}
              src={`/images/icons/${
                name === "google" ? "google-no-border.svg" : icon
              }`}
            />
            <div className="font-bold">{script}</div>
          </Link>
        ))}
        <div className="text-center">또는</div>
        <Link
          to="/sign-up/join"
          className="flex justify-center items-center h-13.75  rounded-lg bg-black text-white font-bold"
        >
          이메일로 가입하기
        </Link>
      </div>
    </div>
  );
}
