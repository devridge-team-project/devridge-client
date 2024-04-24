import { PostCard, CommentCard } from "@/design";
import { Answer, AnswerRequest, OnClick, Community } from "@/interface";
import { Moment, cn } from "@/util";
export default function CommunityById({
  post,
  answers,
  createComment,
  like,
  scrap,
}: {
  post?: Community;
  answers?: Answer[];
  createComment: OnClick<AnswerRequest>;
  like: OnClick<number>;
  scrap: OnClick<number>;
}) {
  const container = {
    displays: "flex flex-col gap-2",
    paddings: "pb-2",
    styles: "bg-white-off",
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

  return (
    <div>
      <div className={cn(container)}>
        <PostCard.Community
          key={post?.id}
          id={post?.id}
          title={post?.title}
          content={post?.content}
          createdAt={Moment.getDateFromNow(post?.createdAt as string)}
          likes={post?.likes}
          scraps={post?.scraps}
          views={post?.views}
          commentCount={post?.comments}
          member={post?.member}
          likeMutate={like}
          scrapMutate={scrap}
        />
      </div>
      <div className={cn(commentBox.container)}>
        <div className={cn(commentBox.body)}>
          <div className="text-lg font-bold">답변하기</div>
          <CommentCard.Create id={post?.id as number} mutate={createComment} />
        </div>
      </div>
      <div className={cn(commentBox.container)}>
        <div className="text-lg font-bold w-full max-w-120">
          답변 {answers?.length ?? "0"}
        </div>
        {answers?.map((answer) => (
          <CommentCard.Read {...answer} likeMutate={like} />
        ))}
      </div>
    </div>
  );
}
