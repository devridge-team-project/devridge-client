import { useState, useEffect } from "react";
import { OnClick, Skill, ProjectRequest } from "@/interface";
import { Tag, Input, TextArea, Button, SelectButton } from "@/design";
import { project } from "@/assets";

export default function ProjectPost({
  projectPost,
  skillInfo,
}: {
  projectPost: OnClick<ProjectRequest>;
  skillInfo?: Skill[];
}) {
  const title = useState<string>("");
  const content = useState<string>("");
  const [meeting, setMeeting] = useState<string>("");
  const [skills, setSkills] = useState<string[]>([]);
  const [roles, setRoles] = useState([
    { id: "frontEnd", checked: false },
    { id: "backEnd", checked: false },
    { id: "design", checked: false },
    { id: "PM", checked: false },
  ]);

  const searchWord = useState<string>("");
  const [searchItems, setSearchItems] = useState<Skill[]>([]);

  const onAddSkillHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const set = new Set(skills);
    const target = e.target as HTMLDivElement;
    set.add(target.dataset.skillName as string);
    setSkills([...set]);
    searchWord[1]("");
  };

  const onRemoveSkillHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const set = new Set(skills);
    const target = e.target as HTMLButtonElement;
    console.log(target);
    set.delete(target.dataset.skill as string);
    setSkills([...set]);
  };

  const onMeetingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMeeting(value);
  };

  const onRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(roles);
    setRoles((prevRoles) =>
      prevRoles.map((role) =>
        role.id === e.target.id ? { ...role, checked: !role.checked } : role
      )
    );
  };

  useEffect(() => {
    if (skillInfo) {
      setSearchItems([
        ...skillInfo.filter(
          ({ skillName }) => skillName.includes(searchWord[0]) === true
        ),
      ]);
    }
  }, [searchWord[0]]);

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
        <Tag title="프로젝트 요약" />
        <TextArea
          state={content}
          placeholder="프로젝트 요약을 입력하세요.
예시 - 온/오프라인으로 달리기 모임을 만들고 찾을 수 있는 앱을 기획 중입니다. 현재 기획자 1명, 백엔드 개발자 1명이 있고, 함께 하실 디자이너와 프론트 개발자를 찾고 있어요!"
        />
      </div>
      <div className="mt-7.5">
        <Tag title="모집분야" />
        <div className="flex">
          {project.roles.map(({ id, value }) => (
            <SelectButton
              key={id}
              id={id}
              type="radio"
              name="meeting"
              value={value}
              checked={roles.find((role) => role.id === id)?.checked}
              onChange={onRoleChange}
              className="w-40 h-7.5 border-2 border-gray-200"
            />
          ))}
        </div>
      </div>
      <div className="mt-7.5">
        <Tag title="기술스택" />
        <Input placeholder="스킬을 검색해보세요" state={searchWord} />
        {searchWord[0] && (
          <div className="max-h-40 ">
            {searchItems.map(({ skillName }) => (
              <div
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
        {skills.map((skill) => (
          <button
            key={skill}
            onClick={onRemoveSkillHandler}
            data-skill={skill}
            className="bg-blue-500 border-blue-500 text-white font-bold flex h-10 grow-0.25 items-center justify-center rounded-full border-2 p-4 duration-500"
          >
            {`${skill} x`}
          </button>
        ))}
      </div>
      <div className="mt-7.5">
        <Tag title="참여방식" />
        <div className="flex">
          {project.meeting.map(({ id, value }) => (
            <SelectButton
              key={id}
              id={id}
              type="radio"
              name="meeting"
              value={value}
              checked={meeting === value}
              onChange={onMeetingChange}
              className="w-40 h-7.5 border-2 border-gray-200"
            />
          ))}
        </div>
      </div>
      <div className="mt-7.5">
        <Button
          title="작성하기"
          onClick={() =>
            projectPost({
              title: title[0],
              content: content[0],
              meeting,
              roles: roles
                .filter((role) => role.checked)
                .map((role) => role.id),
              skillIds: skills.map((skillName) => {
                const matchedSkill = skillInfo?.find(
                  (skill) => skill.skillName === skillName
                );
                return matchedSkill?.id;
              }) as number[],
            })
          }
          options={{ size: "full" }}
        />
      </div>
    </div>
  );
}
