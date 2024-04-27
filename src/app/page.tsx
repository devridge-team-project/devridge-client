import {
  Banner,
  GettingStartDisplay,
  ProjectsDisplay,
  QnasDisplay,
} from "@/components";
import { Footer } from "@/design";
import { cn } from "@/util";

export default function RootPage() {
  const container = {
    positions: "relative",
    displays: "flex flex-col justify-between",
    sizes: "w-full min-h-screen overflow-x-hidden",
  };
  return (
    <div className={cn(container)}>
      <div className="flex flex-col">
        <Banner />
        <QnasDisplay />
        <ProjectsDisplay />
        <GettingStartDisplay />
      </div>
      <Footer />
    </div>
  );
}
