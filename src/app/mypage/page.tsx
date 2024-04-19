import { userApi, signApi } from "@/connection";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { MyAccount } from "@/components";
import { getCookie } from "@/util/cookies";
export default function MyPage() {
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationKey: ["logout"],
    mutationFn: signApi.out,
    onSuccess: () => {
      navigate("/sign-out");
    },
  });
  const { data: user } = useQuery({
    queryKey: ["userDetails"],
    queryFn: userApi.get,
    enabled: !!getCookie("accessToken"),
  });

  return <MyAccount logout={mutate} user={user} />;
}
