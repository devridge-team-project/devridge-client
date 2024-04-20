import React, { useState, useEffect } from "react";
import { Tag, Button, Input } from "@/design";
import { OnClick, Skill, User } from "@/interface";

export default function UpdateAccount({
  patchUser,
  skillInfo,
  user,
}: {
  patchUser: OnClick<FormData>;
  skillInfo?: Skill[];
  user: User;
}) {
  const introduction = useState<string>("");
  const searchWord = useState<string>("");

  const [skill, setSkill] = useState<string[]>([]);
  const [searchItems, setSearchItems] = useState<Skill[]>([]);

  const data = {
    skillIds: skill.map((skillName) => {
      const matchedSkill = skillInfo?.find(
        (skill) => skill.skillName === skillName
      );
      return matchedSkill?.id;
    }),
    introduction: introduction,
  };
  const formData = new FormData();
  const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
  const file = new File([""], "/images/test/default.png");
  formData.append("image", file);
  formData.append("info", blob);

  const onAddSkillHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const set = new Set(skill);
    const target = e.target as HTMLDivElement;
    console.log(target.dataset.skillName);
    set.add(target.dataset.skillName as string);
    setSkill([...set]);
  };

  const onRemoveSkillHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const set = new Set(skill);
    const target = e.target as HTMLButtonElement;
    console.log(target);
    set.delete(target.dataset.skill as string);
    setSkill([...set]);
  };

  useEffect(() => {
    if (skillInfo) {
      setSearchItems([
        ...skillInfo.filter(
          ({ id, skillName }) => skillName.includes(searchWord[0]) === true
        ),
      ]);
    }
  }, [searchWord[0]]);

  useEffect(() => {
    if (skillInfo && user.skillIds) {
      setSkill([
        ...user.skillIds.map((skillId: number) => {
          return skillInfo[skillId - 1].skillName;
        }),
      ]);
    }
  }, [skillInfo]);
  console.log(user);

  return (
    <div className="mx-8.75">
      <div className={`text-1xl text-bright-purple font-bold`}>
        회원정보 수정
      </div>
      <div className="mt-7.5 flex flex-col items-center">
        <img
          src={user?.imageUrl}
          className="h-25 w-25 rounded-full bg-gray-200 "
          alt="profileImage"
        />
        <div className="text-2xl mt-5 text-bright-purple font-bold">
          {user?.nickname}
        </div>
      </div>
      <div className="mt-7.5">
        <div className="flex justify-between">
          <Tag title="자기소개(필수)" />
          <div>{introduction[0].length}/50</div>
        </div>
        <Input
          placeholder="자기소개를 해주세요"
          maxLength={50}
          state={introduction}
        />
      </div>
      <div className="mt-7.5">
        <Tag title="보유 스킬" />
        <Input placeholder="스킬을 검색해보세요" state={searchWord} />
        {searchWord[0] && (
          <div className="max-h-40 ">
            {searchItems.map(({ id, skillName }) => (
              <div
                key={id}
                onClick={onAddSkillHandler}
                data-skill-name={skillName}
                className="hover:bg-gray-100"
              >
                {skillName}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex mt-3.5 flex-wrap gap-2 overflow-hidden">
        {skill.map((skill) => (
          <button
            key={skill}
            onClick={onRemoveSkillHandler}
            data-skill={skill}
            className="bg-blue-500 border-blue-500 text-white font-bold flex h-10 grow items-center justify-center rounded-full border-2 px-4 duration-500"
          >
            {`${skill} x`}
          </button>
        ))}
      </div>
      <div className="mt-12.5">
        <Button
          title="저장하기"
          onClick={() => patchUser(formData)}
          options={{ size: "full" }}
        />
      </div>
    </div>
  );
}
