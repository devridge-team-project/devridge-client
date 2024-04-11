import { OnClick } from "@/interface";
import { cn } from "@/util";

function Button({ title, onClick }: { title: string; onClick: OnClick }) {
  return <button onClick={onClick}>{title}</button>;
}

function CoffeeChat({
  onClick,
  className,
}: {
  onClick: OnClick;
  className?: string;
}) {
  const coffeeChatButton = {
    sizes: "w-21.25 h-6.25",
    styles: "bg-black rounded-md ",
    fonts: "text-white text-xxs font-bold",
    className,
  };
  return (
    <button onClick={onClick} className={cn(coffeeChatButton)}>
      커피챗 신청하기
    </button>
  );
}

function Like({
  likes,
  onClick,
  className,
}: {
  likes: number;
  onClick: OnClick;
  className?: string;
}) {
  const container = {
    displays: "flex gap-1 items-center",
    fonts: "text-xxs",
    className,
  };

  return (
    <button onClick={onClick} className={cn(container)}>
      <img src="/images/icons/thumbs-up.svg" />
      <div>좋아요 {likes}</div>
    </button>
  );
}

Button.CoffeeChat = CoffeeChat;
Button.Like = Like;

export default Button;
