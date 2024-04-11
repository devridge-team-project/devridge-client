import {
  PostCardCommunityProps,
  PostCardProjectProps,
  PostCardQuestionProps,
  PostCardQuestionSimpleProps,
} from "@/interface";
import PostCardCommunityDesign from "./../widget/PostCard.Community.design";
import PostCardProjectDesign from "../widget/PostCard.Project.design";
import PostCardQuestionDesign from "./../widget/PostCard.Question.design";
import PostCardQuestionSimpleDesign from "./../widget/PostCard.QuestionSimple.design";

function Community(props: PostCardCommunityProps) {
  return <PostCardCommunityDesign {...props} />;
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
  Project,
  Question,
};

export default PostCard;
