import { Banner } from "@/components/home";
import Qnas from "@/components/home/Qnas";
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
