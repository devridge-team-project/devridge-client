import { CommentCard } from "@/design";
import { Answer, OnClick, QuestionById } from "@/interface";
import { cn } from "@/util";

export default function Question({
  post,
  answers,
  createComment,
  coffeeChat,
  like,
}: {
  post?: QuestionById;
  answers?: Answer[];
  createComment: OnClick;
  coffeeChat: OnClick;
  like: OnClick;
}) {
  const { title, member, content, views, likes, createdAt } = post ?? {};
  const container = {
    displays: "flex flex-col gap-2",
    sizes: "w-full",
    background: "bg-white-off",
  };
  const question = {
    container: {
      displays: "flex flex-col items-center",
      paddings: "px-8 pb-6 pt-5",
      style: "bg-white",
    },
    body: {
      displays: "flex flex-col gap-3",
      sizes: "w-full max-w-120 ",
    },
    tag: {
      displays: "flex justify-center items-center ",
      sizes: "w-12.5 h-5 ",
      fonts: "text-xs text-bright-purple font-bold",
      styels: "bg-bright-purple/25 rounded-md",
    },
  };
  const comment = {
    displays: "flex flex-col items-center gap-2.5",
    paddings: "pt-5 px-8 pb-6",
    style: "bg-white",
  };
  return (
    <div className={cn(container)}>
      <div className={cn(question.container)}>
        <div className={cn(question.body)}>
          <div className={cn(question.tag)}>Q&A</div>
          <div className="flex justify-between ">
            <div>
              <div className="font-bold">{title}</div>
              <div className="flex text-xxs gap-2.75">
                <div>{createdAt}</div>
                <div>조회수 {views}</div>
                <div>추천수 {likes}</div>
              </div>
            </div>
            <img src="/images/icons/bookmark.svg" className="cursor-pointer" />
          </div>
          <div className="text-xs">{content}</div>
          <div className="flex text-xs">
            <div className="text-bright-purple font-bold">
              {member?.nickname}
            </div>
            님의 질문
          </div>
          <div className="flex justify-center items-center gap-5">
            <button className="flex flex-col items-center gap-2.5 w-18">
              <img src="/images/icons/thumbs-up.svg" className="w-5 h-5" />
              <div className="text-xs">도움이 됐어요</div>
            </button>
            <div className="w-0 h-12.5 border" />
            <button className="flex flex-col items-center gap-2.5 w-18">
              <img src="/images/icons/thumbs-down.svg" className="w-5 h-5" />
              <div className="text-xs">아쉬워요</div>
            </button>
          </div>
        </div>
      </div>
      <div className={cn(comment)}>
        <div className="text-lg font-bold w-full max-w-120">답변하기</div>
        <CommentCard.Create mutate={createComment} />
      </div>
      <div className={cn(comment)}>
        <div className="text-lg font-bold w-full max-w-120">
          답변 {answers?.length ?? "0"}
        </div>
        {answers?.map((answer) => (
          <CommentCard.Read
            {...answer}
            coffeeChatMutate={coffeeChat}
            likeMutate={like}
          />
        ))}
      </div>
    </div>
  );
}
