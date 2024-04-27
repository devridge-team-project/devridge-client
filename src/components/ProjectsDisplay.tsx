import { profiles } from "@/assets";
import { Button } from "@/design";
import { useNavigation } from "@/hook";
import { cn } from "@/util";
import randomItem from "@/util/randomItem";

export default function ProjectsDisplay() {
  const navigate = useNavigation();
  const container = {
    displays: "flex flex-col items-center gap-7.5",
    paddings: "pt-12.5 pb-13",
  };
  return (
    <div className={cn(container)}>
      <div className="flex flex-col items-center text-2xl font-bold">
        <div>스터디 및 사이드 프로젝트</div>
        <div>팀원을 구하고 싶을 때</div>
      </div>
      <Button
        title="팀원 구하기"
        onClick={() => navigate("/projects")}
        options={{
          size: "sm",
        }}
      />
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 infinite-slider-left-right">
          {teammates.map((teammate) => (
            <TeammateBox
              key={teammate.occupation + teammate.skills}
              {...teammate}
            />
          ))}
        </div>
        <div className="flex gap-4 infinite-slider-right-left">
          {teammates.map((teammate) => (
            <TeammateBox
              key={teammate.occupation + teammate.skills}
              {...teammate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface Teammate {
  occupation: string;
  image: string;
  skills: [string, string][];
}

function TeammateBox({ occupation, skills }: Teammate) {
  const container = {
    displays: "flex flex-col items-center",
    sizes: "w-32.5 h-55",
    paddings: "px-2.5 pt-2.5",
    styles: "rounded-md shadow-md",
  };
  return (
    <div className={cn(container)}>
      <img
        src={`/images/test/${randomItem(profiles)}.png`}
        className="w-25 h-25 "
      />
      <div className="mt-1.25 w-full h-6.25 bg-bright-purple/10 text-bright-purple text-xxs flex justify-center items-center font-bold rounded-md">
        {occupation}
      </div>
      <div className="w-full flex flex-col gap-y-1.25 mt-2.5">
        {skills.map(([skill1, skill2]) => (
          <div className="flex gap-2 w-full">
            <Skill content={skill1} />
            <Skill content={skill2} />
          </div>
        ))}
      </div>
    </div>
  );
}
function Skill({ content }: { content: string }) {
  return (
    <div className="bg-black h-6 flex justify-center items-center rounded-2xl text-white grow  text-xxs">
      {content}
    </div>
  );
}

const teammates = [
  {
    occupation: "풀스텍 개발자",
    skills: [
      ["React", "Node.js"],
      ["Javascript", "Java"],
    ],
  },
  {
    occupation: "프론트엔드 개발자",
    skills: [
      ["React", "Typescript"],
      ["Javascript", "HTML/CSS"],
    ],
  },
  {
    occupation: "백엔드 개발자",
    skills: [
      ["Node.js", "Express"],
      ["Javascript", "MongoDB"],
    ],
  },
  {
    occupation: "데이터 엔지니어",
    skills: [
      ["Python", "SQL"],
      ["빅데이터", "머신러닝"],
    ],
  },
  {
    occupation: "QA 엔지니어",
    skills: [
      ["테스트 자동화", "Jest"],
      ["Cypress", "Selenium"],
    ],
  },
  {
    occupation: "디자이너",
    skills: [
      ["Figma", "Adobe XD"],
      ["UI/UX", "프로토타이핑"],
    ],
  },
] as Teammate[];
