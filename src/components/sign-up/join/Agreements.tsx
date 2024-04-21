import { checkboxes } from "./static/agreements";
import { Layout, Modal } from "@/design";
import { useSignUpStore, useWidgetStore } from "@/shared";
import { modal } from "./static/modal";

export default function Agreements() {
  const { agreements } = useSignUpStore();
  const { setView, setModal } = useWidgetStore();
  const necessary = ["flag1", "flag2"].every((flag) => agreements[flag]);
  return (
    <Layout.SignUp
      widgets={{
        shows: [["necessary", <Modal.Alert script={modal.necessary} />]],
      }}
      titles={{ title: ["약관 동의가", "필요해요"] }}
      checkboxes={checkboxes}
      buttons={[
        [
          "인증하기",
          () => {
            if (!necessary) return setModal("necessary");
            return setView("credentials");
          },
        ],
      ]}
    />
  );
}
