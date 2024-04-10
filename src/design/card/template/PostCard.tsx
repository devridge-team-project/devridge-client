import {
  PostCardCommunityProps,
  PostCardQuestionProps,
  PostCardQuestionSimpleProps,
} from "@/interface";
import PostCardCommunityDesign from "./../widget/PostCard.Community.design";
import PostCardQuestionDesign from "./../widget/PostCard.Question.design";
import PostCardQuestionSimpleDesign from "./../widget/PostCard.QuestionSimple.design";

function Community(props: PostCardCommunityProps) {
  return <PostCardCommunityDesign {...props} />;
}

function Question(props: PostCardQuestionProps) {
  return <PostCardQuestionDesign {...props} />;
}

function QuestionSimple(props: PostCardQuestionSimpleProps) {
  return <PostCardQuestionSimpleDesign {...props} />;
}

Question.Simple = QuestionSimple;

const PostCard = {
  Community,
  Question,
};

export default PostCard;
