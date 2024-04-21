import ReactDOM from "react-dom";
import { ModalProps } from "@/interface";
import { cn } from "@/util";
import { useTransition, animated } from "react-spring";
export default function ModalDesign({
  isVisible,
  children,
  classNames,
}: ModalProps) {
  const container = {
    positions: "fixed top-0 left-0 z-50",
    displays: "flex justify-center items-center",
    sizes: "w-full min-h-screen ",
    styles: "bg-black/10 backdrop-blur-sm",
  };
  const body = {
    sizes: "w-80 h-62.5",
    styles: "rounded-2xl bg-white shadow-md shadow-black/50",
  };
  const transition = useTransition(isVisible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 150 },
  });
  return ReactDOM.createPortal(
    transition(
      (styles, item) =>
        item && (
          <animated.div style={styles} className={cn(container)}>
            <div className={cn(body)}>
              <div className={classNames}>{children}</div>
            </div>
          </animated.div>
        )
    ),
    document.body
  );
}
