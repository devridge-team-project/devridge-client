import {
  PostCardCommunityProps,
  PostCardNoticeProps,
  PostCardProjectProps,
  PostCardQuestionProps,
  PostCardQuestionSimpleProps,
} from "@/interface";
import PostCardCommunityDesign from "./../widget/PostCard.Community.design";
import PostCardProjectDesign from "../widget/PostCard.Project.design";
import PostCardQuestionDesign from "./../widget/PostCard.Question.design";
import PostCardQuestionSimpleDesign from "./../widget/PostCard.QuestionSimple.design";
import PostCardNoticeDesign from "../widget/PostCard.Notice.design";

function Community(props: PostCardCommunityProps) {
  return <PostCardCommunityDesign {...props} />;
}

function Notice(props: PostCardNoticeProps) {
  return <PostCardNoticeDesign {...props} />;
}

function Project(props: PostCardProjectProps) {
  return <PostCardProjectDesign {...props} />;
}

function Question(props: PostCardQuestionProps) {
  return <PostCardQuestionDesign {...props} />;
}

function QuestionPreview(props: PostCardQuestionSimpleProps) {
  return <PostCardQuestionSimpleDesign {...props} />;
}

Question.Preview = QuestionPreview;

const PostCard = {
  Community,
  Notice,
  Project,
  Question,
};

export default PostCard;
