import { Member } from "./Member";

export interface Study {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  content: string;
  category: string;
  likes: number;
  dislikes: number;
  views: number;
  location: string | null;
  member: Member;
}

export interface StudyRequest {
  title: string;
  content: string;
  category: string;
  location: string;
}
