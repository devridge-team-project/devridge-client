import { Member } from "./Member";

export interface PostCardProps {
  id: number;
  title: string;
  commentCount: number;
  content: string;
  views: number;
  likes: number;
  createdAt: string;
}

export interface PostCardCommunityProps extends PostCardProps {
  member: Member;
}
export interface PostCardQuestionProps extends PostCardProps {}
export interface PostCardQuestionSimpleProps
  extends Omit<PostCardProps, "content"> {
  index: number;
}

interface CommentCardProps {
  id: number;
  member: Member;
  content: string;
  likes: number;
  createdAt: string;
}

export interface CommentCardQuestionProps extends CommentCardProps {}
