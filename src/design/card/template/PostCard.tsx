import PostCardCommunityDesign from "./../widget/PostCard.Community.design";
import PostCardQuestionDesign from "./../widget/PostCard.Question.design";
import PostCardQuestionSimpleDesign from "./../widget/PostCard.QuestionSimple.design";

function Community() {
  return <PostCardCommunityDesign />;
}

function Question() {
  return <PostCardQuestionDesign />;
}

interface PostCardQuestionSimple {
  index: number;
}

function QuestionSimple({ index }: PostCardQuestionSimple) {
  return <PostCardQuestionSimpleDesign index={index} />;
}

Question.Simple = QuestionSimple;

const PostCard = {
  Community,
  Question,
};

export default PostCard;
