import { Note } from "@/interface";
import { Moment, cn } from "@/util";
export default function NoteById({
  nickname,
  receiverId,
  posts,
}: {
  nickname: string;
  receiverId: number;
  posts?: Omit<Note, "userInformation">[];
}) {
  const header = {
    positions: "fixed top-35 left-0",
    sizes: "w-full h-37",
    styles: "bg-white",
  };
  const container = {
    display: "flex flex-col gap-2.5",
    styles: "bg-white-off",
  };

  const textBox = {
    container: {
      displays: "flex justify-between",
      paddings: "pt-7.5 px-9 ",
      sizes: "w-full h-33",
      styles: "bg-white",
    },
    sendTitle: {
      fonts: "text-base font-bold",
      styles: "",
    },
    receiveTitle: {
      fonts: "text-base font-bold",
      styles: "text-bright-purple",
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
  console.log(posts);
  return (
    <div className={cn(header)}>
      <div className="pl-9 flex items-center w-full h-13 font-bold text-xl border-b ">
        {nickname}
      </div>
      <div className={cn(container)}>
        {posts?.map((note) => (
          <div key={note.id} className={cn(textBox.container)}>
            <div>
              {receiverId === note.senderId ? (
                <div className={cn(textBox.receiveTitle)}>받은 쪽지</div>
              ) : (
                <div className={cn(textBox.sendTitle)}>보낸 쪽지</div>
              )}

              <div className={cn(textBox.content)}>{note.content}</div>
            </div>
            <div className={cn(textBox.date)}>
              {Moment.getDate(note.createdAt)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
