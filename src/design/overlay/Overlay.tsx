import { useTransition, animated } from "react-spring";
import { cn } from "@/util";
import { useSignUpStore, useWidgetStore } from "@/shared";
import { Link } from "react-router-dom";
import { links } from "./links";
import { Button } from "../html";
import { useNavigation } from "@/hook";

interface OverlayProps {
  isVisible?: boolean;
}

export default function Overlay({ isVisible }: OverlayProps) {
  const navigation = useNavigation();
  const { clearView } = useWidgetStore();
  const {
    signUpData: { isSignedIn },
  } = useSignUpStore();
  const container = {
    positions: "fixed top-0 right-0 z-50",
    sizes: "h-full",
    styles: "bg-white border-black",
  };
  const body = {
    positions: "relative",
    displays: "flex flex-col gap-2.5",
    sizes: "h-full w-full",
    paddings: "pt-25 px-8.75",
  };

  const transitions = useTransition(isVisible, {
    from: { width: "30%", opacity: 0 },
    enter: { width: "100%", opacity: 1 },
    leave: { width: "70%", opacity: 0 },
    config: { duration: 150 },
  });

  return transitions(
    (styles, item) =>
      item && (
        <animated.div style={styles} className={cn(container)}>
          <div className={cn(body)}>
            <div className="text-xl font-bold ">카테고리</div>
            {links
              .filter(({ isSignIn }) => !isSignIn || (isSignIn && isSignedIn))
              .map(({ name, href, icon }) => (
                <Link
                  key={href}
                  to={href}
                  onClick={clearView}
                  className="flex items-center gap-3.75"
                >
                  <img src={`/images/icons/${icon}.svg`} />
                  <div>{name}</div>
                </Link>
              ))}
            <div className="flex flex-col mt-21 gap-2.5">
              {isSignedIn ? (
                <Button
                  onClick={() => navigation("/sign-out", clearView)}
                  options={{
                    size: "full",
                  }}
                  title="로그아웃"
                />
              ) : (
                <>
                  <Button
                    onClick={() => navigation("/sign-in", clearView)}
                    options={{
                      size: "full",
                    }}
                    title="로그인"
                  />
                  <Button
                    onClick={() => navigation("/sign-up", clearView)}
                    options={{
                      color: "white",
                      size: "full",
                    }}
                    title="회원가입"
                  />
                </>
              )}
            </div>
            <img
              src="/images/icons/devridge.svg"
              alt="logo"
              className="absolute top-7 left-8.75 w-7.5 h-7.5 "
            />
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
