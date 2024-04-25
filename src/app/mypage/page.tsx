import { userApi } from "@/connection";
import { useQuery } from "@tanstack/react-query";
import { MyAccount } from "@/components";
import { useSignUpStore } from "@/shared";
export default function MyPage() {
  const {
    signUpData: { isSignedIn },
  } = useSignUpStore();

  const { data: user } = useQuery({
    queryKey: ["userDetails"],
    queryFn: userApi.get,
    enabled: isSignedIn,
  });

  return <MyAccount user={user} />;
}
