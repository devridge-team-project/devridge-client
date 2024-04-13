import { useMutation } from "@tanstack/react-query";
import { SignIn } from "@/components";
import { signApi } from "@/connection";

export default function SignInPage() {
  const { mutate } = useMutation({
    mutationKey: ["signIn"],
    mutationFn: signApi.in,
  });

  return <SignIn signIn={mutate} />;
}
