import React, { useState, useEffect } from "react";
import { Button, Input } from "@/design";
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
  const [skill, setSkill] = useState<string[]>([]);
  const introduction = useState<string>("");
  const searchWord = useState<string>("");
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

  return (
    <div>
      <div className={`w-80 text-1xl text-blue-grey font-bold`}>
        회원정보 수정
      </div>
      <img
        src={user?.imageUrl}
        className="mt-7.5 h-25 w-25 rounded-full bg-gray-200 "
        alt="profileImage"
      />
      <div className="mt-7 text-2xl text-blue-grey font-bold">
        {user?.nickname}
      </div>
      <div>
        <div className="font-bold text-xs">자기소개(필수)</div>
        <Input state={introduction} />
        <div className=" font-bold text-xs mt-5">보유 스킬</div>
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

        <div className="flex mb-12.5 max-h-84 w-full flex-wrap gap-2 overflow-hidden">
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
        <Button
          title="저장하기"
          onClick={() => patchUser(formData)}
          options={{ size: "full" }}
        />
      </div>
    </div>
  );
}
