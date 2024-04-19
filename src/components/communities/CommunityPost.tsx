import { OnClick, CommunityRequest } from "@/interface";
import { useState } from "react";
import { Button, Input, TextArea } from "@/design";

export default function CommunityPost({
  communityPost,
}: {
  communityPost: OnClick<CommunityRequest>;
}) {
  const title = useState<string>("");
  const content = useState<string>("");

  return (
    <div>
      <div>
        <div className="text-xl font-bold mb-3.75">제목</div>
        <Input
          state={title}
          placeholder="제목을 5자 이상 입력해주세요."
          options={{ noOutline: true }}
        />
      </div>
      <div className="mt-7.5">
        <div className="text-xl font-bold mb-3.75">내용</div>
        <TextArea state={content} placeholder="궁금한 것을 작성해보세요." />
      </div>
      <Button
        title="작성하기"
        onClick={() => communityPost({ title: title[0], content: content[0] })}
        options={{ size: "full" }}
      />
    </div>
  );
}
