import { ButtonProps, OnClick, Size } from "@/interface";
import { center } from "@/style/display";
import { cn } from "@/util";

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

function Button({ title, onClick, options, freeze }: ButtonProps) {
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

function Float({ image, onClick }: { image: string; onClick: OnClick }) {
  const container = {
    positions: "fixed bottom-6.5 right-8.75",
    displays: "flex justify-center items-center",
    sizes: "w-17.5 h-17.5 rounded-full bg-black",
  };
  return (
    <button onClick={onClick} className={cn(container)}>
      <img src={image} alt="float" />
    </button>
  );
}

Button.Float = Float;

export default Button;
