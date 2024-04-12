import { Member } from "./Member";
import { OnClick } from "./Property";
import { Skill } from "./Skill";

export interface PostCardProps {
  id: number;
  title: string;
  content: string;
  commentCount: number;
  views: number;
  likes: number;
  createdAt: string;
}

export interface PostCardCommunityProps extends PostCardProps {
  member: Member;
}

export interface PostCardProjectProps
  extends Omit<PostCardProps, "commentCount"> {
  dislikes: number;
  roles: string | null;
  isRecruiting: boolean;
  meeting: string;
  skills: Skill[];
}

export interface PostCardQuestionProps extends PostCardProps {}
export interface PostCardQuestionSimpleProps
  extends Omit<PostCardProps, "content"> {
  index: number;
}

export interface CommentCardProps {
  id: number;
  member: Member;
  content: string;
  likes: number;
  createdAt: string;
}

export interface CommentCardReadProps extends CommentCardProps {
  coffeeChatMutate: OnClick;
  likeMutate: OnClick;
}

export interface CommentCardCreateProps {
  mutate?: OnClick;
}
