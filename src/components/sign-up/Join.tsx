import { useEffect } from "react";
import { cn } from "@/util";
import { Events } from "@/design";
import { useSignUpStore, useWidgetStore } from "@/shared";
import Agreements from "./join/Agreements";
import UserInformation from "./join/UserInformation";
import Credentials from "./join/Credentials";
import Authentication from "./join/Authentication";
import Skills from "./join/Skills";

export default function Join() {
  const { authToken } = useSignUpStore();
  const { setView } = useWidgetStore();
  const isToken = authToken !== "";
  useEffect(() => {
    if (isToken) return setView("skills");
  }, []);
  const conatiner = {
    positions: "absolute top-0 ",
    displays: "flex flex-col items-center justify-center",
    sizes: "w-full min-h-screen ",
  };

  return (
    <div className={cn(conatiner)}>
      <Events.Replace
        widgets={[
          ["skills", <Skills />],
          ["credentials", <Credentials />],
          ["authentication", <Authentication />],
          ["personalInformation", <UserInformation />],
        ]}
      >
        <Agreements />
      </Events.Replace>
    </div>
  );
}
