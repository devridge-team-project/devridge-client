import { Outlet } from "react-router-dom";
import { cn } from "@/util";
import { Header } from "@/design";

export default function RootLayout() {
  const container = {
    positions: "relative",
    sizes: "w-full min-h-screen",
    styles: "font-pretendard",
  };

  return (
    <div className={cn(container)}>
      <Header />
      <Outlet />
    </div>
  );
}
