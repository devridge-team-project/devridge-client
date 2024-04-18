import { PostCard, CommentCard } from "@/design";
import { Answer, OnClick, Study } from "@/interface";
import { cn } from "@/util";
function StudyById({
  post,
  answers,
  createComment,
  coffeeChat,
  like,
}: {
  post?: Study;
  answers?: Answer[];
  createComment?: OnClick;
  coffeeChat: OnClick;
  like: OnClick;
}) {
  const container = {
    displays: "flex flex-col gap-2.5",
    styles: "bg-white-off",
  };
  const study = {
    container: {
      displays: "flex flex-col justify-center items-center",
      paddings: "px-8 pb-6 pt-5",
      styles: "bg-white",
    },
    body: {
      sizes: "w-full max-w-120 ",
    },
    tag: {
      displays: "flex justify-center items-center ",
      sizes: "w-20 h-5 ",
      fonts: "text-xxs text-bright-purple font-bold",
      styels: "bg-bright-purple/25 rounded-md",
    },
    role: {
      displays: "flex justify-center items-center",
      sizes: " w-20 h-7.5",
      styles: "bg-dark-gray/20 text-dark-gray text-sm font-bold rounded-md",
    },
  };
  const titleBox = {
    container: {
      displays: "flex",
      styles: "text-base font-bold pt-2",
    },

    title: {
      sizes: "w-full max-w-100",
      styles: "truncate ",
    },
  };

  const commentBox = {
    container: {
      displays: "flex flex-col items-center gap-2.5",
      paddings: "pt-5 px-8 pb-6",
      styles: "bg-white",
    },
    body: {
      displays: "flex flex-col gap-2.5",
      sizes: " w-full max-w-120",
    },
    button: {
      displays: "flex justify-center items-center",
      sizes: "w-full h-12.5",
      styles: "bg-bright-purple rounded-md ",
      fonts: "text-white text-sm font-bold",
    },
  };
  console.log(post);
  return (
    <div className={cn(container)}>
      <div className={cn(study.container)}>
        <div className={cn(study.body)}>
          <div className={cn(study.tag)}>{post?.category}</div>
          <div className={cn(titleBox.container)}>
            <div className={cn(titleBox.title)}>{post?.title}</div>
          </div>
          <div className="flex pt-1.25 text-xs font-bold">
            <div className="text-bright-purple">{post?.member.nickname}</div>
            <div>의 스터디</div>
          </div>
          <div className="flex gap-1 pt-4.25 text-xs text-bright-gray">
            <div>{post?.createdAt}</div>
            <div>조회수 {post?.views}</div>
            <div>추천수 {post?.likes}</div>
          </div>
          <div className="text-sm font-bold mt-2.5">스터디 내용</div>
          <div className="text-xxs">{post?.content}</div>
          <div className="mt-[13.5px] flex">
            <div className="text-sm mr-[7px] text-bright-purple font-bold">
              위치
            </div>
            <div className="text-sm">{post?.location}</div>
          </div>

          <div className="pt-7.5 flex gap-3 text-xs">
            <button>추천해요</button>
            <button>저장하기</button>
            <button>추천해요</button>
          </div>
        </div>
      </div>
      <div className={cn(commentBox.container)}>
        <div className={cn(commentBox.body)}>
          <button className={cn(commentBox.button)}>쪽지 보내기</button>
          <div className="text-lg font-bold">답변하기</div>
          <CommentCard.Create mutate={createComment} />
        </div>
      </div>
      <div className={cn(commentBox.container)}>
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

export default StudyById;
