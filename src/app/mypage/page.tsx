import { userApi, signApi } from "@/connection";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { MyAccount } from "@/components";
export default function MyPage() {
  const navigate = useNavigate();
  const { mutate, isSuccess } = useMutation({
    mutationKey: ["logout"],
    mutationFn: signApi.out,
  });
  if (isSuccess) {
    alert("로그아웃 됐습니다.");
    navigate("/");
  }
  const { data: user } = useQuery({
    queryKey: ["userDetails"],
    queryFn: userApi.get,
  });

  return <MyAccount logout={mutate} user={user} />;
}
