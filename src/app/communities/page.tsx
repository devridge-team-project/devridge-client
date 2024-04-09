import { PostCard } from "@/design";
import { cn } from "@/util";

export default function Communities() {
  const container = {
    displays: "flex flex-col gap-2",
    styles: "bg-white-off",
  };
  return (
    <div className={cn(container)}>
      <div className="bg-white w-full h-24" />
      <PostCard.Community />
    </div>
  );
}
