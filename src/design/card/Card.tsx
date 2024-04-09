import { Size } from "@/interface";

const widthSize = {
  sm: "w-37.5",
} as Record<Size, string>;

const heightSize = {
  sm: "h-37.6",
} as Record<Size, string>;

interface Options {}
interface CardProps {}

export default function Card() {
  const container = {
    positions: "relative",
    sizes: `${widthSize["sm"]} ${heightSize["sm"]}`,
  };
  return <div>Card</div>;
}
