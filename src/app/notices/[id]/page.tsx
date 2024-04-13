import { useParams } from "react-router-dom";

// TODO: Need design
export default function NoticePage() {
  const { id } = useParams();
  return <div>{id}번째 공지사항</div>;
}
