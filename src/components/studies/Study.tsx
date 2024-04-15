import { CommentCard } from "@/design";
import { OnClick, Study } from "@/interface";
import { cn } from "@/util";
function StudyById({
  post,
  createComment,
}: {
  post?: Study;
  createComment?: OnClick;
}) {
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
  console.log(post);
  return (
    <div>
      <div className={cn(commentBox.container)}>
        <div className={cn(commentBox.body)}>
          <button className={cn(commentBox.button)}>쪽지 보내기</button>
          <div className="text-lg font-bold">답변하기</div>
          <CommentCard.Create mutate={createComment} />
        </div>
      </div>
    </div>
  );
}

export default StudyById;
