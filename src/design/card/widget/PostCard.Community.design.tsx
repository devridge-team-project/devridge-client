import { PostCardCommunityProps } from "@/interface";
import { cn } from "@/util";
import { Link } from "react-router-dom";

export default function PostCardCommunityDesign({
  createdAt,
  title,
  content,
  likes,
  views,
  member,
}: PostCardCommunityProps) {
  const container = {
    sizes: "w-full h-70",
    displays: "flex flex-col",
    paddings: "px-8 pt-7",
    styles: "bg-white",
  };
  const header = {
    container: "flex justify-between",
  };
  const body = {
    container: "flex flex-col gap-3.5 pt-6.25 ",
    title: {
      sizes: "w-full h-5",
      fonts: "font-bold",
    },
    content: {
      sizes: "w-full h-8.5",
      styles: "overflow-hidden line-clamp-2",
      fonts: "text-xs",
    },
  };
  const coffeeChatButton = {
    sizes: "w-17.5 h-7.5",
    styles: "bg-bright-purple rounded-md ",
    fonts: "text-white text-xs font-bold",
  };
  return (
    <div className={cn(container)}>
      <div className={header.container}>
        <div className="flex gap-3.5">
          <div className="bg-black rounded-full w-12.5 h-12.5" />
          <div className="flex flex-col">
            <div className="font-bold text-sm">{member.nickname}</div>
            <div className="text-xs">{member.introduction}</div>
            <div className="text-xs">{createdAt}</div>
          </div>
        </div>
        <button className={cn(coffeeChatButton)}>커피챗</button>
      </div>
      <div className={body.container}>
        <div className={cn(body.title)}>{title}</div>
        <div className={cn(body.content)}>{content}</div>
      </div>
      <div className="flex justify-between text-xxs pt-8.75">
        <div className="flex gap-3.25">
          <div className="min-w-12.5">좋아요 {likes}</div>
          <div>저장</div>
        </div>
        <div>조회 {views}</div>
      </div>
      <div className="pt-3.75 flex gap-3.75 text-xxs font-bold">
        <button onClick={() => {}}>추천해요</button>
        <button onClick={() => {}}>저장하기</button>
      </div>
    </div>
  );
}