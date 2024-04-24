import { PostCardCommunityProps } from "@/interface";
import { cn } from "@/util";
import { Link, useLocation } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { chatApi } from "@/connection";
import Swal from "sweetalert2";

export default function PostCardCommunityDesign({
  id,
  createdAt,
  title,
  content,
  likes,
  scraps,
  views,
  member,
  commentCount,
  likeMutate,
  scrapMutate,
}: PostCardCommunityProps) {
  const isDepth = useLocation().pathname.split("/").length > 2;
  const container = {
    sizes: "w-full h-70",
    displays: "flex flex-col",
    paddings: "px-8 pt-7",
    styles: "bg-white",
    etc: isDepth && "cursor-default",
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
  const { mutate } = useMutation({
    mutationKey: ["PostCoffeeChat", member?.id],
    mutationFn: chatApi.post,
  });
  //Link to={!isDepth ? `${id}` : "#"}
  return (
    <div className={cn(container)}>
      <div className={header.container}>
        <div className="flex gap-3.5">
          <div className="bg-black rounded-full w-12.5 h-12.5" />
          <div className="flex flex-col">
            <div className="font-bold text-sm">{member?.nickname}</div>
            <div className="text-xs">{member?.introduction}</div>
            <div className="text-xs">{createdAt}</div>
          </div>
        </div>
        <button
          className={cn(coffeeChatButton)}
          onClick={() => {
            Swal.fire({
              title: "커피챗 요청을 보내시겠습니까?",
              input: "text",
              showCancelButton: true,
              confirmButtonText: "보내기",
              confirmButtonColor: "bright-purple",
              cancelButtonText: "취소",
              cancelButtonColor: "bright-purple",
            }).then((result) => {
              if (result.value) {
                mutate({
                  message: result.value,
                  toMemberId: member?.id as number,
                });
              }
            });
          }}
        >
          커피챗
        </button>
      </div>
      <Link to={!isDepth ? `${id}` : "#"}>
        <div className={body.container}>
          <div className={cn(body.title)}>{title}</div>
          <div className={cn(body.content)}>{content}</div>
        </div>
        <div className="flex justify-between text-xxs pt-8.75">
          <div className="flex gap-3.25">
            <div className="min-w-12.5">좋아요 {likes}</div>
            <div>저장 {scraps}</div>
          </div>
          <div>조회 {views}</div>
        </div>
        {likeMutate && scrapMutate && (
          <div className="pt-3.75 flex gap-3.75 text-xxs font-bold">
            <div className="flex gap-1">
              <img src={"/images/icons/thumbs-up.svg"} alt="likes" />
              <button onClick={() => likeMutate(id as number)}>추천해요</button>
            </div>
            <div className="flex gap-1">
              <img src={"/images/icons/bookmark.svg"} alt="scrap" />
              <button onClick={() => scrapMutate(id as number)}>
                저장하기
              </button>
            </div>
            <div className="flex gap-1">
              <img src={"/images/icons/comments.svg"} alt="comments" />
              <div>{commentCount}</div>
            </div>
          </div>
        )}
      </Link>
    </div>
  );
}
