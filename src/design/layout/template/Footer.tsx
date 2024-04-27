import { Link } from "react-router-dom";
import { footers } from "@/assets";
import { cn } from "@/util";

export default function Footer() {
  const container = {
    displays: "flex flex-col gap-1.25 justify-end",
    paddings: "pl-8.75  pb-10",
    sizes: "w-full h-62.5",
    styles: "bg-black",
  };
  return (
    <div className={cn(container)}>
      <div className="flex gap-2.5">
        {footers.map(({ link, src, alt }) => (
          <Link key={link} to={link}>
            <img src={src} alt={alt} className="w-7.5 h-7.5" />
          </Link>
        ))}
      </div>
      <div className="font-bold flex text-xs text-white">
        © 2024 DEVRIDGE, All rights reserved.
      </div>
    </div>
  );
}
