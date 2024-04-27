import { Button } from "@/design";
import { useNavigation } from "@/hook";
import { cn } from "@/util";

export default function QnasDisplay() {
  const navigate = useNavigation();
  const container = {
    displays: "flex flex-col items-center gap-7.5",
    paddings: "pt-15 pb-13",
  };
  return (
    <div className={cn(container)}>
      <div className="flex flex-col items-center text-2xl font-bold">
        <div>모든 개발자를 위한</div>
        <div>지식 공유 플랫폼</div>
      </div>
      <Button
        title="질문하러 가기"
        onClick={() => navigate("/questions")}
        options={{
          size: "sm",
        }}
      />
      <div className="grid grid-cols-2 gap-4">
        {qnas.map((qna, index) => (
          <QnaBox index={index} {...qna} />
        ))}
      </div>
    </div>
  );
}

interface Qna {
  name: string;
  image: string;
  occupation: string;
  title: string;
  content: string;
}

function QnaBox({
  index,
  name,
  image,
  occupation,
  title,
  content,
}: Qna & { index: number }) {
  const container = {
    displays: "flex flex-col gap-5",
    sizes: "w-37.5 h-37.5",
    styles: "rounded-md shadow-md",
    paddings: "pl-4 pt-3.75",
    margins: index % 2 !== 0 ? "mt-2" : "",
  };
  return (
    <div className={cn(container)}>
      <div className="flex items-center gap-2.5">
        <img src={image} className="w-7.5 h-7.5 rounded-full" />
        <div className="h-6 flex flex-col  justify-center font-bold">
          <div className="text-xs">{name}</div>
          <div className="text-xxs">{occupation}</div>
        </div>
      </div>
      <div className="flex flex-col gap-2.5">
        <div className="font-bold w-26.5 h-3 text-xs truncate leading-none">
          {title}
        </div>
        <div className="w-28 text-xxs line-clamp-4 leading-3">{content}</div>
      </div>
    </div>
  );
}

const qnas = [
  {
    name: "개발하는 고양이",
    image: "/images/test/yujin.png",
    occupation: "프론트엔드 개발자",
    title: "React에서 상태관리는 어떻게 하나요?",
    content: `파이썬으로 간단한 숫자 게임을 구현하는 중인데 코드에 대한 질문이 있습니다.
      어떻게 하면 제가 원하는 방식으로 코드를 작성할 수 있을까요?
      파이썬으로 간단한 숫자 게임을 구현하는 중인데 코드에 대한 질문이 있습니다.
      어떻게 하면 제가 원하는 방식으로 코드를 작성할 수 있을까요?`,
  },
  {
    name: "뉴진스 강해린",
    image: "/images/test/haerin.png",
    occupation: "머신러닝 엔지니어",
    title: "머신러닝 모델의 성능을 높이는 방법은 무엇인가요?",
    content: `파이썬으로 간단한 숫자 게임을 구현하는 중인데 코드에 대한 질문이 있습니다.
      어떻게 하면 제가 원하는 방식으로 코드를 작성할 수 있을까요?
      파이썬으로 간단한 숫자 게임을 구현하는 중인데 코드에 대한 질문이 있습니다.`,
  },
  {
    name: "미에로 화이바",
    image: "/images/test/haewon.png",
    occupation: "백엔드 개발자",
    title: "Node.js에서 비동기 처리는 어떻게 하는 것이 좋나요?",
    content: `자바스크립트로 간단한 숫자 게임을 구현하는 중인데 코드에 대한 질문이 있습니다.
      어떻게 하면 제가 원하는 방식으로 코드를 작성할 수 있을까요?
      파이썬으로 간단한 숫자 게임을 구현하는 중인데 코드에 대한 질문이 있습니다.`,
  },
  {
    name: "피카츄",
    image: "/images/test/jenkins.png",
    occupation: "데이터 사이언티스트",
    title: "데이터 분석을 위한 파이썬 라이브러리는 어떤 것이 있나요?",
    content: `파이썬으로 간단한 숫자 게임을 구현하는 중인데 코드에 대한 질문이 있습니다.
      어떻게 하면 제가 원하는 방식으로 코드를 작성할 수 있을까요?
      파이썬으로 간단한 숫자 게임을 구현하는 중인데 코드에 대한 질문이 있습니다.`,
  },
] as Qna[];
