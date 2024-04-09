import { Outlet } from "react-router-dom";
import { cn } from "@/util";
import { Events, Header, Overlay } from "@/design";

export default function RootLayout() {
  const container = {
    positions: "relative",
    sizes: "w-full min-h-screen",
    styles: "font-pretendard-medium",
  };

  return (
    <Events.Show widgets={[["overlay", <Overlay />]]}>
      <div className={cn(container)}>
        <Header />
        <Outlet />
      </div>
    </Events.Show>
  );
}
