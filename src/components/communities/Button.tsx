import { OnClick } from "@/interface";
import { cn } from "@/util";
import classNames from "./../../util/classNames";

function Button({ title, onClick }: { title: string; onClick: OnClick }) {
  return <button onClick={onClick}>{title}</button>;
}

function CoffeeChat({ id, className }: { id: number; className?: string }) {
  const coffeeChatButton = {
    sizes: "w-17.5 h-7.5",
    styles: "bg-bright-purple rounded-md ",
    fonts: "text-white text-xs font-bold",
    className,
  };
  return <button className={cn(coffeeChatButton)}>커피챗</button>;
}

Button.CoffeeChat = CoffeeChat;

export default Button;
