import { Member } from "./Member";
export interface Note {
  id: number;
  content: string;
  senderId: number;
  userInformation: Member;
  createdAt: string;
}

export interface NoteRequest {
  content: string;
  receiverId: number;
}
