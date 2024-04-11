import { CommentCardCreateProps, CommentCardReadProps } from "@/interface";
import CommentCardReadDesign from "../widget/CommentCard.Read.design";
import CommentCardCreateDesign from "../widget/CommentCard.Create.design";

function Create(props: CommentCardCreateProps) {
  return <CommentCardCreateDesign {...props} />;
}

function Read(props: CommentCardReadProps) {
  return <CommentCardReadDesign {...props} />;
}

const CommentCard = { Create, Read };

export default CommentCard;
