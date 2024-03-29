import { ButtonProps, Size } from "interface";
import { center } from "style/display";
import { cn } from "util/classNames";

const sizes = {
  xs: "w-25 h-10 rounded-md",
  sm: "w-50 h-12 rounded-full",
  md: "w-72 h-12 rounded-full",
  lg: "w-80 h-15 rounded-md",
  full: "w-full h-12 rounded-md",
} as Record<Size, string>;

const colorSet = {
  black: "bg-black border-2 border-black text-white",
  white: "bg-white border-2 border-black text-black",
} as Record<string, string>;

export default function Button({ title, type, onClick, options, freeze }: ButtonProps) {
  const { size, color } = options ?? {};
  const container = {
    positions: center.colO(0),
    sizes: sizes[size ?? "sm"],
    freeze: freeze ? "cursor-default" : "",
    texts: `font-bold text-${size === "xs" ? "base" : "xl"}`,
    colors: colorSet[color ?? "black"],
  };

  return (
    <button onClick={onClick} className={cn(container)}>
      {title}
    </button>
  );
}
