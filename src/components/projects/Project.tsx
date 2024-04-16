import { PostCard, CommentCard } from "@/design";
import { Answer, OnClick, Project } from "@/interface";
import { cn } from "@/util";

export default function ProjectById({
  post,
  answers,
  createComment,
  coffeeChat,
  like,
}: {
  post?: Project;
  answers?: Answer[];
  createComment?: OnClick;
  coffeeChat: OnClick;
  like: OnClick;
}) {
  const container = {
    displays: "flex flex-col gap-2.5",
    styles: "bg-white-off",
  };
  const project = {
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
    recruiting: {
      sizes: "w-16",
      color: post?.isRecruiting ? "text-bright-purple" : "text-brown-gray",
    },
    title: {
      sizes: "w-full max-w-100",
      styles: "pl-3.5 truncate ",
    },
  };
  const commentBox = {
    container: {
      displays: "flex flex-col items-center",
      paddings: "px-8 pt-6.25",
      sizes: "h-full",
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

  return (
    <div className={cn(container)}>
      <div className={cn(project.container)}>
        <div className={cn(project.body)}>
          <div className={cn(project.tag)}>사이드 프로젝트</div>
          <div className={cn(titleBox.container)}>
            <div className={cn(titleBox.recruiting)}>
              {post?.isRecruiting ? "모집 중" : "모집 완료"}
            </div>
            <div className="border-r-2" />
            <div className={cn(titleBox.title)}>{post?.title}</div>
          </div>
          <div className="flex pt-1.25 text-xs font-bold">
            <div className="text-bright-purple">{post?.member.nickname}</div>
            <div>의 프로젝트</div>
          </div>
          <div className="flex gap-1 pt-4.25 text-xs text-bright-gray">
            <div>{post?.createdAt}</div>
            <div>조회수 {post?.views}</div>
            <div>추천수 {post?.likes}</div>
          </div>
          <div className="text-sm font-bold mt-2.5">프로젝트 요약</div>
          <div className="text-xxs">{post?.content}</div>
          <div className="text-sm font-bold my-2">모집 역할</div>
          <div className="flex gap-2">
            {post?.roles?.split(",").map((role) => (
              <div key={role} className={cn(project.role)}>
                {role}
              </div>
            ))}
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
