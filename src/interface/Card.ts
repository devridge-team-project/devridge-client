export interface PostCardProps {
  title: string;
  commentCount: number;
  content: string;
  views: number;
  likes: number;
  createdAt: string;
}

export interface PostCardQuestionProps extends PostCardProps {}
export interface PostCardQuestionSimpleProps
  extends Omit<PostCardProps, "content"> {
  index: number;
}
