import { useLocation, useParams } from "react-router-dom";

export default function Community() {
  const { id } = useParams();
  return <div>{id}</div>;
}
