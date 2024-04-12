import { Member } from "./Member";
import { Skill } from "./Skill";

export interface Project {
  id: number;
  roles: string | null;
  title: string;
  content: string;
  likes: number;
  dislikes: number;
  views: number;
  isRecruiting: boolean;
  skills: Skill[];
  meeting: string;
  member: Member;
  createdAt: string;
  updatedAt: string;
}
