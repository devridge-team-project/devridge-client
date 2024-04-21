import ReactDOM from "react-dom";
import { useTransition, animated } from "react-spring";
import { cn } from "@/util";
import { Interaction } from "@/interface/";

export default function ScriptDesign({ isVisible, script }: Interaction) {
  const container = {
    positions: "fixed top-0 left-0 z-50",
    displays: "flex justify-center items-center",
    sizes: "w-full min-h-screen ",
    styles: "bg-black/10 backdrop-blur-sm",
  };
  const transition = useTransition(isVisible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return ReactDOM.createPortal(
    transition(
      (styles, item) =>
        item && (
          <animated.div style={styles} className={cn(container)}>
            <div className="text-5xl font-bold text-black">{script}</div>
          </animated.div>
        )
    ),
    document.body
  );
}
