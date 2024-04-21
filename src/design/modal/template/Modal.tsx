import { LineBreaks } from "@/design/text";
import { Script } from "@/interface";
import { useWidgetStore } from "@/shared";
import { cn } from "@/util";
import ModalDesign from "../widget/Modal.design";
import { Button } from "@/design/html";

function Alert({ script }: { script: Script }) {
  const { clearModal } = useWidgetStore();
  const modal = {
    displays: "flex flex-col items-center gap-7",
    sizes: "w-full h-full",
    styles: "pt-6",
  };
  const textBox = {
    sizes: "h-13",
    text: "text-base font-bold",
  };

  return (
    <ModalDesign classNames={cn(modal)}>
      <img
        src="/images/icons/warning.svg"
        alt="warning"
        width={40}
        height={40}
      />
      <LineBreaks texts={script} className={cn(textBox)} />
      <Button title="확인" onClick={clearModal} options={{ size: "xs" }} />
    </ModalDesign>
  );
}

const Modal = {
  Alert,
};
export default Modal;
