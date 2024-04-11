import { CommentCardCreateProps } from "@/interface";
import { cn } from "@/util";

export default function CommentCardCreateDesign({
  mutate,
}: CommentCardCreateProps) {
  const container = {
    displays: "flex flex-col items-center",
    sizes: "w-full max-w-120 h-48",
    paddings: "pt-4 px-4",
    styles: "bg-white border-2 rounded-md",
  };
  const textArea = {
    sizes: "w-full h-32",
    fonts: "text-xs",
    styles: "focus:outline-none border-b",
  };

  return (
    <div className={cn(container)}>
      <textarea className={cn(textArea)} placeholder="답변을 작성하세요." />
      <div className="flex justify-between items-center w-full h-12">
        <img src="/images/icons/code.svg" />
        <button
          onClick={mutate}
          className="bg-black w-15 h-6.25 flex justify-center items-center text-xxs text-white rounded-md"
        >
          답변 등록
        </button>
      </div>
    </div>
  );
}
