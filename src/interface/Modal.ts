import { Script } from "./HTMLElement";
import { Size } from "./Property";

export interface ModalOptions {
  width: Size;
  height: Size;
}

export interface ModalProps {
  children: React.ReactNode;
  isVisible?: boolean;
  classNames?: string;
  options?: Partial<ModalOptions>;
}

export interface ModalAlertProps extends Omit<ModalProps, "children"> {
  script: Script;
}
