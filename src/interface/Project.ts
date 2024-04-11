import { Skill } from "./Skill";

export interface Project {
  id: number;
  createdAt: string;
  roles: string | null;
  title: string;
  content: string;
  likes: number;
  dislikes: number;
  views: number;
  isRecruiting: boolean;
  skills: Skill[];
  meeting: string;
}
