import { CommentCardQuestionProps } from "@/interface";
import CommentCardQuestionDesign from "./../widget/CommentCard.Question.design";
function Question(props: CommentCardQuestionProps) {
  return <CommentCardQuestionDesign {...props} />;
}

const CommentCard = {
  Question,
};

export default CommentCard;
