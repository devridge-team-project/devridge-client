import { useState, useEffect } from "react";
import { OnClick, Skill, ProjectRequest } from "@/interface";
import { Input, TextArea, Button, SelectButton } from "@/design";
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
  const [roles, setRoles] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);

  const [checkRoles, setCheckRoles] = useState([
    { id: "frontEnd", checked: false },
    { id: "backEnd", checked: false },
    { id: "design", checked: false },
    { id: "PM", checked: false },
  ]);
  const [checkMeeting, setCheckMeeting] = useState({
    online: false,
    offline: false,
  });

  const searchWord = useState<string>("");
  const [searchItems, setSearchItems] = useState<Skill[]>([]);

  const onAddSkillHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const set = new Set(skills);
    const target = e.target as HTMLDivElement;
    set.add(target.dataset.skillName as string);
    setSkills([...set]);
  };

  const onMeetingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMeeting(value);
  };

  const onRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckRoles((prevCheckRoles) =>
      prevCheckRoles.map((role) =>
        role.id === e.target.id ? { ...role, checked: !role.checked } : role
      )
    );
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

  return (
    <div>
      <div>
        <div>
          <div className="text-xl font-bold mt-4 mb-2.5">제목 </div>
          <Input
            state={title}
            placeholder="제목을 5자 이상 입력해주세요."
            options={{ noOutline: true }}
          />
        </div>
        <div>
          <div className="text-xl font-bold mt-4 mb-2.5">프로젝트 요약</div>
          <TextArea state={content} placeholder="궁금한 것을 작성해보세요." />
        </div>
      </div>
      <div>
        <div className="text-xl font-bold mt-4 mb-2.5">모집 분야</div>
        <div className="flex">
          {project.roles.map(({ id, value }) => (
            <SelectButton
              key={id}
              id={id}
              type="radio"
              name="meeting"
              value={value}
              checked={checkRoles.find((role) => role.id === id)?.checked}
              onChange={onRoleChange}
              className="w-40 h-7.5 border-2 border-gray-200"
            />
          ))}
        </div>
      </div>
      <div className=" font-bold text-xl mt-5">기술 스택</div>
      <Input placeholder="스킬을 검색해보세요" state={searchWord} />
      {searchWord[0] && (
        <div className="max-h-40 ">
          {searchItems.map(({ id, skillName }) => (
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

      <div className="mb-4">
        <div className="text-xl font-bold mt-4 mb-2.5">참여방식</div>
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
      <Button
        title="작성하기"
        onClick={() =>
          projectPost({
            title: title[0],
            content: content[0],
            meeting,
            roles,
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
  );
}
