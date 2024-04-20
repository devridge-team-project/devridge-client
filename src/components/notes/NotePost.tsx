import { useState } from "react";
import { OnClick, NoteRequest } from "@/interface";
import { TextArea, Button } from "@/design";
function NotePost({
  notePost,
  receiverId,
}: {
  notePost: OnClick<NoteRequest>;
  receiverId: number;
}) {
  const content = useState<string>("");
  return (
    <div className="mx-8.75">
      <div className="mt-5">{content[0].length}/150자</div>
      <div className="mt-5">
        <TextArea
          maxLength={150}
          state={content}
          placeholder="쪽지 내용을 입력해보세요"
        />
      </div>
      <Button
        title="작성하기"
        onClick={() => notePost({ receiverId, content: content[0] })}
        options={{ size: "full" }}
      />
    </div>
  );
}

export default NotePost;
