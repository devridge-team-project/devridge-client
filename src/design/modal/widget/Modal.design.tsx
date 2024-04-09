import { ModalOptions } from "@/interface";
import { cn } from "@/util";

const widthSize = {
  sm: "w-80",
};

export default function ModalDesign({}: ModalOptions) {
  const container = {
    positions: "fixed top-0 left-0 w-full h-full bg-black bg-opacity-50",
  };
  const body = {
    sizes: `${widthSize["sm"]} `,
  };
  return (
    <div className={cn(container)}>
      <div className={cn(body)}></div>
    </div>
  );
}
