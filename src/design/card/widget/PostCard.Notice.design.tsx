import { PostCardNoticeProps } from "@/interface";
import { cn } from "@/util";
import { Link } from "react-router-dom";

export default function PostCardNoticeDesign({
  title,
  content,
}: PostCardNoticeProps) {
  const container = {
    displays: "flex flex-col",
    paddings: "pt-7.5 px-11.25 ",
    sizes: "w-full h-33",
    styles: "bg-white",
  };
  const textBox = {
    title: {
      fonts: "text-base font-bold",
      styles: "text-bright-purple",
    },
    content: {
      fonts: "text-xxs",
      sizes: "w-75 h-14.5",
      styles: "line-clamp-4",
    },
  };

  return (
    <Link to="#" className={cn(container)}>
      <div className={cn(textBox.title)}>{title}</div>
      <div className={cn(textBox.content)}>{content}</div>
    </Link>
  );
}
