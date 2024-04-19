import { State, Size, OnClick } from "./Property";

export type Script = string | string[] | undefined;

export interface InputProps<T> {
  state: State<T>;
  type?: string;
  placeholder?: string;
  options?: {
    noOutline?: boolean;
  };
}

export interface SelectProps<T> {
  state: State<T>;
  selectOptions: { value: number; title: string }[];
  placeholder?: string;
}

export interface ButtonProps {
  title: string;
  type?: string;
  onClick?: OnClick;
  options?: { size?: Size; color?: string };
  freeze?: boolean;
}

export interface CheckBoxProps {
  title: string;
  script?: string;
  flag: string;
}
