import { cn } from "@/util";
import { InputProps } from "@/interface";

export default function TextArea<T extends string | number | undefined>({
  state,
  placeholder,
  options,
}: InputProps<T>) {
  const [value, setValue] = state;
  const onChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value as T);
  };
  const container = {
    sizes: "w-full min-h-80",
    styles: "focus:outline-none text-xl",
  };
  return (
    <textarea
      className={cn(container)}
      value={value}
      onChange={onChangeValue}
      placeholder={placeholder ?? ""}
    />
  );
}
