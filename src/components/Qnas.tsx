import { Button } from "@/design";
import { cn } from "@/util";

export default function Qnas() {
  const container = {
    displays: "flex flex-col items-center gap-3.75",
    paddings: "pt-15",
  };
  return (
    <div className={cn(container)}>
      <div className="flex flex-col items-center text-2xl font-bold">
        <div>모든 개발자를 위한</div>
        <div>지식 공유 플랫폼</div>
      </div>
      <Button
        title="질문하러 가기"
        options={{
          size: "sm",
        }}
      />
    </div>
  );
}
