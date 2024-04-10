import { useTransition, animated } from "react-spring";
import { cn } from "@/util";
import { useWidgetStore } from "@/shared/store";

interface OverlayProps {
  isVisible?: boolean;
}

export default function Overlay({ isVisible }: OverlayProps) {
  const { clearView } = useWidgetStore();
  const container = {
    positions: "fixed top-0 right-0 z-50",
    sizes: "h-full",
    styles: "bg-white border-black",
  };
  const body = {
    positions: "relative",
    displays: "flex flex-col",
    sizes: "h-full w-full",
    paddings: "pt-12 pl-12",
  };

  const transitions = useTransition(isVisible, {
    from: { width: "30%", opacity: 0 },
    enter: { width: "100%", opacity: 1 },
    leave: { width: "0%", opacity: 0 },
    config: { duration: 150 },
  });

  return transitions(
    (styles, item) =>
      item && (
        <animated.div style={styles} className={cn(container)}>
          <div className={cn(body)}>
            <div>안녕하세요 반갑습니다</div>
            <img
              onClick={clearView}
              src="/images/icons/close.svg"
              alt="close"
              className="absolute top-7 right-7 cursor-pointer w-6 h-6"
            />
          </div>
        </animated.div>
      )
  );
}
