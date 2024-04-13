import { Banner } from "@/components";
import Qnas from "@/components/Qnas";
import { cn } from "@/util";

export default function RootPage() {
  const container = {
    displays: "flex flex-col",
  };
  return (
    <div className={cn(container)}>
      <Banner />
      <Qnas />
    </div>
  );
}