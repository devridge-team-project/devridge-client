import { CommentCardReadProps } from "@/interface";
import { Moment, cn } from "@/util";

export default function CommentCardReadDesign({
  member,
  createdAt,
  content,
  likes,
  likeMutate,
}: CommentCardReadProps) {
  const container = {
    positions: "relative",
    displays: "flex flex-col",
    sizes: "w-full max-w-120 min-h-44",
    paddings: "px-5 py-4",
    styles: "bg-white border-2 rounded-md",
  };
  const coffeeChatButton = {
    positions: "absolute top-0 right-0",
    sizes: "w-21.25 h-6.25",
    styles: "bg-black rounded-md ",
    fonts: "text-white text-xxs font-bold",
  };
  const likeButton = {
    positions: "absolute bottom-4 left-4.5",
    displays: "flex gap-1 items-center",
    fonts: "text-xxs",
  };

  return (
    <div className={cn(container)}>
      <div className="text-xxs text-bright-gray">
        {Moment.getDateFromNow(createdAt)}
      </div>
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
        <button onClick={() => {}} className={cn(coffeeChatButton)}>
          커피챗 신청하기
        </button>
      </div>
      <div className="text-xxs pt-2.5">{content}</div>
      <button onClick={() => likeMutate} className={cn(likeButton)}>
        <img src="/images/icons/thumbs-up.svg" />
        <div>좋아요 {likes}</div>
      </button>
    </div>
  );
}
