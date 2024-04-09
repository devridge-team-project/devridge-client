import PostCardCommunityDesign from "./../widget/PostCard.Community.design";
import PostCardQuestionDesign from "./../widget/PostCard.Question.design";
import PostCardQuestionSimpleDesign from "./../widget/PostCard.QuestionSimple.design";

function Community() {
  return <PostCardCommunityDesign />;
}

function Question() {
  return <PostCardQuestionDesign />;
}

function QuestionSimple() {
  return <PostCardQuestionSimpleDesign />;
}

Question.Simple = QuestionSimple;

const PostCard = {
  Community,
  Question,
};

export default PostCard;
