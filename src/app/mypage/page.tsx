import { userApi } from "@/connection";
import { useQuery } from "@tanstack/react-query";
import { MyAccount } from "@/components";
import { useSignStore } from "@/shared";
export default function MyPage() {
  const { isSignIn } = useSignStore();

  const { data: user } = useQuery({
    queryKey: ["userDetails"],
    queryFn: userApi.get,
    enabled: isSignIn,
  });

  return <MyAccount user={user} />;
}
