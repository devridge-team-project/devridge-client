import { Button } from "@/design";
import { useNavigation } from "@/hook";
import { cn } from "@/util";

export default function GettingStartDisplay() {
  const navigate = useNavigation();
  const container = {
    displays: "flex flex-col items-center",
    paddings: "pt-12.5 pb-25",
  };
  return (
    <div className={cn(container)}>
      <div className="flex flex-col items-center text-2xl font-bold">
        <div>함께 나누며</div>
        <div>성장하고, 연결되다.</div>
      </div>
      <div className="flex flex-col mt-6 mb-25">
        {motos.map((moto) => (
          <MotoBox {...moto} />
        ))}
      </div>
      <Button
        title="지금 시작하기"
        onClick={() => navigate("/sign-in")}
        options={{
          size: "sm",
        }}
      />
    </div>
  );
}

interface Moto {
  image: string;
  script: string;
}

function MotoBox({ image, script }: Moto) {
  const container = {
    displays: "flex items-center gap-2.5",
    sizes: "w-80 h-20",
  };
  return (
    <div className={cn(container)}>
      <img src={image} className="w-20 h-20 bg-black" />
      <div className="text-xs flex justify-center items-center rounded-xl bg-light-gray w-57.5 h-10 font-bold">
        {script}
      </div>
    </div>
  );
}

const motos = [
  {
    image: "/images/home/phone.png",
    script: "언제나, 어디에 있더라도 간편하게",
  },
  {
    image: "/images/home/chat.png",
    script: "오늘의 질문, 내일의 혁신",
  },
  {
    image: "/images/home/punch.png",
    script: "개발자들의 아이디어가 만나는 곳",
  },
  {
    image: "/images/home/hand.png",
    script: "지식 공유를 통한 리워드 지급",
  },
] as Moto[];
