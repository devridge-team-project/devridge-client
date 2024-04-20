import { useState } from "react";
import { Tag, Input, TextArea, Button, SelectButton } from "@/design";
import { OnClick, StudyRequest } from "@/interface";
import { studies } from "@/assets";

export default function StudyPost({
  studyPost,
}: {
  studyPost: OnClick<StudyRequest>;
}) {
  const title = useState<string>("");
  const content = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const location = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const category = studies.find((study) => study.value === value)?.id;
    setCategory(category as string);
  };

  return (
    <div className="mx-8.75">
      <div>
        <Tag title="제목" />
        <Input
          state={title}
          placeholder="제목을 5자 이상 입력해주세요."
          options={{ noOutline: true }}
        />
      </div>
      <div className="mt-7.5">
        <Tag title="위치" />
        <Input placeholder="위치를 입력해보세요" state={location} />
      </div>
      <div className="mt-7.5">
        <Tag title="카테고리" />
        <div className="flex">
          {studies.map(({ id, value }) => (
            <SelectButton
              key={id}
              id={id}
              type="radio"
              name="category"
              value={value}
              checked={category === id}
              onChange={onChange}
              className=" w-[90px] h-7.5 border-2 border-gray-200"
            />
          ))}
        </div>
      </div>
      <div className="mt-7.5">
        <Tag title="내용" />
        <TextArea state={content} placeholder="스터디 내용을 작성해보세요." />
      </div>
      <div className="mt-7.5">
        <Button
          title="작성하기"
          onClick={() =>
            studyPost({
              title: title[0],
              content: content[0],
              category,
              location: location[0],
            })
          }
          options={{ size: "full" }}
        />
      </div>
    </div>
  );
}
