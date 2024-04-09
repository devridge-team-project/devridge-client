import { cn } from "@/util";

export default function Banner() {
  const container = {
    displays: "flex flex-col justify-start",
    paddings: "pt-10 pl-6",
    sizes: "w-full h-67.5",
    background: "bg-image-developer-man bg-cover",
    styles: "text-white",
  };
  return (
    <div className={cn(container)}>
      <div className="font-bold text-2xl">개발 고민?</div>
      <div className="font-bold text-2xl">DEVRIDGE에서 물어봐!</div>
      <div className="text-xs">개발 관련 질문부터 팀 빌딩까지</div>
    </div>
  );
}
