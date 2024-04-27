import { Member } from "./Member";
export interface Note {
  id: number;
  content: string;
  senderId: number;
  scraps: number;
  userInformation: Member;
  createdAt: string;
}

export interface NoteRequest {
  content: string;
  receiverId: number;
}
