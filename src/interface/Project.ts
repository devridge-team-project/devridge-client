import { Member } from "./Member";
import { Skill } from "./Skill";

export interface Project {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  content: string;
  roles: string | null;
  member: Member;
  views: number;
  likes: number;
  dislikes: number;
  skills: Skill[];
  meeting: string;
  isRecruiting: boolean;
}

export interface ProjectPost {
  title: string;
  content: string;
  skillIds: number[];
  meeting: string;
  roles: string[];
}