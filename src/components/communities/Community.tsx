import { PostCard, CommentCard } from "@/design";
import { OnClick, Community } from "@/interface";
import { cn } from "@/util";
export default function CommunityById({
  post,
  createComment,
}: {
  post?: Community;
  createComment?: OnClick;
}) {
  const container = {
    displays: "flex flex-col gap-2",
    paddings: "pb-2",
    styles: "bg-white-off",
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
    <div>
      <div className={cn(container)}>
        <PostCard.Community
          key={post?.id}
          id={post?.id}
          title={post?.title}
          content={post?.content}
          createdAt={post?.createdAt}
          likes={post?.likes}
          views={post?.views}
          commentCount={post?.comments}
          member={post?.member}
        />
      </div>
      <div className={cn(commentBox.container)}>
        <div className={cn(commentBox.body)}>
          <div className="text-lg font-bold">답변하기</div>
          <CommentCard.Create mutate={createComment} />
        </div>
      </div>
    </div>
  );
}
