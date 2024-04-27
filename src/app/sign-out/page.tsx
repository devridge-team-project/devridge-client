import { useEffect } from "react";
import { useNavigation } from "@/hook";
import { useSignUpStore } from "@/shared";
import { signApi } from "@/connection";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";

const SignOut = () => {
  const navigate = useNavigation();
  const { setSignUpData } = useSignUpStore();
  const { mutate } = useMutation({
    mutationKey: ["logout"],
    mutationFn: signApi.out,
  });

  useEffect(() => {
    setSignUpData({
      nickname: "",
      occupation: "",
      introduction: "",
      imageUrl: null,
      skillIds: [],
      isSignedIn: false,
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
