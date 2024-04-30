import { useEffect } from "react";
import { useNavigation } from "@/hook";
import { useSignInStore } from "@/shared";
import { signApi } from "@/connection";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";

const SignOut = () => {
  const navigate = useNavigation();
  const { setSignInData } = useSignInStore();
  const { mutate } = useMutation({
    mutationKey: ["logout"],
    mutationFn: signApi.out,
  });

  useEffect(() => {
    setSignInData({
      userId: 0,
      isSignIn: false,
      nickname: "",
      occupation: "",
      introduction: "",
      imageUrl: null,
      skillIds: [],
    });
    mutate();
    Swal.fire({
      title: "로그아웃 되었습니다.",
      confirmButtonText: "확인",
      confirmButtonColor: "#4F26F4",
    });
    navigate("/");
  }, []);

  return null;
};

export default SignOut;
