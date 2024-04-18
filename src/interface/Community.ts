import { Member } from "./Member";

export interface Community {
  id: number;
  createdAt: string;
  updatedAt: string;
  member: Member;
  title: string;
  content: string;
  views: number;
  likes: number;
  comments: number;
  scraps: number;
}

export interface CommunityRequest {
  title: string;
  content: string;
}
