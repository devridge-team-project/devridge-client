import { userApi, signApi } from "@/connection";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { MyAccount } from "@/components";
import { useSignUpStore } from "@/shared";
export default function MyPage() {
  const navigate = useNavigate();
  const {
    signUpData: { isSignedIn },
    setSignUpData,
  } = useSignUpStore();
  const { mutate, isSuccess } = useMutation({
    mutationKey: ["logout"],
    mutationFn: signApi.out,
  });
  if (isSuccess) {
    alert("로그아웃 됐습니다.");
    setSignUpData({ isSignedIn: false });
    navigate("/");
  }
  const { data: user } = useQuery({
    queryKey: ["userDetails"],
    queryFn: userApi.get,
    enabled: isSignedIn,
  });

  return <MyAccount logout={mutate} user={user} />;
}
