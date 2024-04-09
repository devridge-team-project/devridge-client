import { cn } from "@/util";

export default function PostCard() {
  const container = {
    displays: "flex flex-col items-start",
    styles: "border-2",
  };

  return (
    <div className={cn(container)}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
