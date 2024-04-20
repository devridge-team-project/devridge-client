import { userApi, skillApi } from "@/connection";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { UpdateAccount } from "@/components";

export default function UpdatePage() {
  const {
    state: { user },
  } = useLocation();
  const { data: skillInfo } = useQuery({
    queryKey: ["skill"],
    queryFn: skillApi.getAll,
  });

  const { mutate } = useMutation({
    mutationFn: userApi.patch,
    onSuccess: () => {
      alert("유저 정보 변경 성공");
    },
  });

  return <UpdateAccount patchUser={mutate} user={user} skillInfo={skillInfo} />;
}
