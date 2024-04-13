import { auths } from "@/assets";
import { cn } from "@/util";

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
    sizes: "w-12.5 h-12.5 p-2.5",
  };
  return (
    <div className={cn(container)}>
      <div className={cn(body)}>
        <div className="text-3xl text-bright-purple font-bold">
          회원가입 방식
        </div>
        {auths.map(({ name, icon }) => (
          <button className="w-full h-13.75">
            <img
              className={name === "google" ? cn(iconBox) : ""}
              src={`/images/icons/${
                name === "google" ? "google-no-border.svg" : icon
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
