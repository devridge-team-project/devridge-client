import { cn } from "@/util";
import { InputProps } from "@/interface";

export default function TextArea<T extends string | number | undefined>({
  state,
  placeholder,
  maxLength,
  options,
}: InputProps<T>) {
  const [value, setValue] = state;
  const onChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value as T);
  };
  const container = {
    sizes: "w-full",
    styles: "focus:outline-none min-h-40 text-1xl resize-none",
  };
  return (
    <textarea
      className={cn(container)}
      maxLength={maxLength}
      value={value}
      onChange={onChangeValue}
      placeholder={placeholder ?? ""}
    />
  );
}
