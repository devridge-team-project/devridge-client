import { cn } from "@/util";

export default function PostCardCommunityDesign() {
  const container = {
    sizes: "w-full h-70",
    displays: "flex flex-col",
    paddings: "px-8 pt-7",
    styles: "bg-white",
  };
  const header = {
    container: "flex justify-between",
    coffeeChatButton: {
      sizes: "w-17.5 h-7.5",
      styles: "bg-bright-purple rounded-md ",
      fonts: "text-white text-xs font-bold",
    },
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

  return (
    <div className={cn(container)}>
      <div className={header.container}>
        <div className="flex gap-3.5">
          <div className="bg-black rounded-full w-12.5 h-12.5" />
          <div>
            <div className="font-bold text-sm">김고성</div>
            <div className="text-xs">IOS 개발자 지망생</div>
            <div className="text-xs">3시간 전</div>
          </div>
        </div>
        <button className={cn(header.coffeeChatButton)}>커피챗</button>
      </div>
      <div className={body.container}>
        <div className={cn(body.title)}>This is Title</div>
        <div className={cn(body.content)}>This is Content</div>
      </div>
      <div className="flex justify-between text-xxs pt-8.75">
        <div className="flex gap-3.25">
          <div className="min-w-12.5">좋아요</div>
          <div>저장</div>
        </div>
        <div>조회 0</div>
      </div>
      <div className="pt-3.75 flex gap-3.75 text-xxs font-bold">
        <div>추천해요</div>
        <div>저장하기</div>
        <div>저장하기</div>
      </div>
    </div>
  );
}
