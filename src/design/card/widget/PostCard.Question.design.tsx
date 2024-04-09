import { cn } from "@/util";

interface PostCardQuestionProps {
  index: number;
}

export default function PostCardQuestionDesign() {
  const container = {
    sizes: "w-full",
  };
  return <div className={cn(container)}>PostCardQuestions</div>;
}
