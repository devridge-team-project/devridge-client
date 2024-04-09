import { Size } from "./Property";

export interface ModalOptions {
  width: Size;
  height: Size;
}

export interface ModalProps {
  options?: Partial<ModalOptions>;
}
