import { Member } from "./Member";

export interface Study {
  studyId: number;
  category: string;
  title: string;
  content: string;
  likes: number;
  dislikes: number;
  views: number;
  location: string | null;
  totalPeople: number | null;
  currentPeople: number | null;
}

export interface StudyPost {
  title: string;
  content: string;
  category: string;
  location: string;
  totalPeople: number;
  currentPeople: number;
}

export interface StudyById {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  content: string;
  likes: number;
  dislikes: number;
  views: number;
  location: string | null;
  totalPeople: number | null;
  currentPeople: number | null;
  member: Member;
}
