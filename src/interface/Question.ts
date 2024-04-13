import { Member } from "./Member";

export interface Question {
  id: number;
  title: string;
  likes: number;
  views: number;
  content: string;
  commentCount: number;
  createdAt: string;
}

export interface QuestionById {
  member: Member;
  title: string;
  content: string;
  views: number;
  likes: number;
  dislikes: number;
  createdAt: string;
  commentCount: number;
}

export interface QuestionPost {
  title: string;
  content: string;
}
