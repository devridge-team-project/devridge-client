import { Member } from "./Member";

export interface Answer {
  id: number;
  member: Member;
  content: string;
  likes: number;
  dislikes: number;
  createdAt: string;
  updatedAt: string;
}

export interface AnswerRequest {
  id?: number;
  content: string;
}
