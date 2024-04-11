import { Button } from "@/components/questions";
import { CommentCardReadProps } from "@/interface";
import { cn } from "@/util";

export default function CommentCardQuestionDesign({
  member,
  createdAt,
  content,
  likes,
  coffeeChatMutate,
  likeMutate,
}: CommentCardReadProps) {
  const container = {
    positions: "relative",
    displays: "flex flex-col",
    sizes: "w-full max-w-120 min-h-44",
    paddings: "px-5 py-4",
    styles: "bg-white border-2 rounded-md",
  };
  return (
    <div className={cn(container)}>
      <div className="text-xxs text-bright-gray">{createdAt}</div>
      <div className="relative flex flex-row items-center pt-1.25 gap-2.5">
        <div className="w-9 h-9 rounded-full bg-black" />
        <div className="flex flex-col">
          <div className="text-xs font-bold text-bright-purple">
            {member.nickname}
          </div>
          <div className="text-xxs font-bold text-bright-gray">
            {member.introduction}
          </div>
        </div>
        <Button.CoffeeChat
          onClick={coffeeChatMutate}
          className="absolute top-0 right-0"
        />
      </div>
      <div className="text-xxs pt-2.5">{content}</div>
      <Button.Like
        onClick={likeMutate}
        likes={likes}
        className="absolute bottom-4 left-4.5"
      />
    </div>
  );
}
