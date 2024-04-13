import { Member } from "./Member";

interface Hashtag {
  id: number;
  word: string;
}

export interface Community {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  content: string;
  views: number;
  likes: number;
  comments: number;
  member: Member;
  hashtags: Hashtag[];
  scraps: number;
}

export interface CommunityPost {
  title: string;
  content: string;
  hashtags: Hashtag[];
}
