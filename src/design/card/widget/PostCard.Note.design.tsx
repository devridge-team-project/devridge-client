import { PostCardNoteProps } from "@/interface";
import { cn, Moment } from "@/util";
import { Link } from "react-router-dom";

export default function PostCardNoteDesign({
  id,
  content,
  userInformation,
  createdAt,
}: PostCardNoteProps) {
  const container = {
    displays: "flex justify-between",
    paddings: "pt-7.5 px-9 ",
    sizes: "w-full h-33",
    styles: "bg-white",
  };
  const textBox = {
    title: {
      fonts: "text-base font-bold",
      styles: "",
    },
    content: {
      fonts: "text-xxs",
      sizes: "w-75 h-14.5",
      styles: "line-clamp-4",
    },
    date: {
      fonts: "text-xxs",
    },
  };
  console.log(content, createdAt);
  return (
    <Link
      to={`/notes/${id}`}
      state={{
        nickname: userInformation?.nickname,
        receiverId: userInformation?.id,
      }}
      className={cn(container)}
    >
      <div>
        <div className={cn(textBox.title)}>{userInformation?.nickname}</div>
        <div className={cn(textBox.content)}>{content}</div>
      </div>
      <div className={cn(textBox.date)}>
        {Moment.getDate(createdAt as string)}
      </div>
    </Link>
  );
}
