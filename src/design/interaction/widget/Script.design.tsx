import { cn } from "@/util";

export default function ScriptDesign({ script }: { script: string }) {
  const container = {
    positions: "fixed top-0 left-0 z-50",
    displays: "flex justify-center items-center",
    sizes: "w-full min-h-screen ",
    styles: "bg-black/10 backdrop-blur-sm",
  };
  return (
    <div className={cn(container)}>
      <div className="text-5xl font-bold text-black">{script}</div>
    </div>
  );
}
