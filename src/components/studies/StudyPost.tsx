import { useState } from "react";
import { Input, TextArea, Button, SelectButton } from "@/design";
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
    <div>
      <div>
        <div className="text-xl font-bold mt-4 mb-2.5">제목</div>
        <Input
          state={title}
          placeholder="제목을 5자 이상 입력해주세요."
          options={{ noOutline: true }}
        />
      </div>
      <div>
        <div className="text-xl font-bold mt-4 mb-2.5">위치</div>
        <Input placeholder="위치를 입력해보세요" state={location} />
        <div>
          <div className="text-xl font-bold mt-4 mb-2.5">카테고리</div>
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
        <div>
          <div className="text-xl font-bold mt-4 mb-2.5">내용</div>
          <TextArea state={content} placeholder="스터디 내용을 작성해보세요." />
        </div>

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
