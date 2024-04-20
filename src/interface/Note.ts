import { Member } from "./Member";

export interface Notes {
  id: number;
  content: string;
  userInformation: Member;
  createdAt: string;
}

export interface Note {
  id: number;
  content: string;
  senderId: number;
  createdAt: string;
}

export interface NoteRequest {
  content: string;
  receiverId: number;
}
