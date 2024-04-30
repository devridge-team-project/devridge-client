import { userApi } from "@/connection";
import { useQuery } from "@tanstack/react-query";
import { MyAccount } from "@/components";
import { useSignInStore } from "@/shared";
export default function MyPage() {
  const {
    signInData: { isSignIn },
  } = useSignInStore();

  const { data: user } = useQuery({
    queryKey: ["userDetails"],
    queryFn: userApi.get,
    enabled: isSignIn,
  });

  return <MyAccount user={user} />;
}
