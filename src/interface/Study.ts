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
  totalPeople: number | null;
  currentPeople: number | null;
  member: Member;
}

export interface StudyPost {
  title: string;
  content: string;
  category: string;
  location: string;
  totalPeople: number;
  currentPeople: number;
}
