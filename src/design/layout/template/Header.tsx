import { useLocation } from "react-router-dom";
import { cn } from "@/util";
import { useWidgetStore } from "@/shared/store";
import useNavigation from "@/hook/useNavigation";

export default function Header() {
  const { setView, clearView } = useWidgetStore();
  const navigate = useNavigation();
  const location = useLocation().pathname;

  const isLocated = location === "/questions" || location === "/communities";
  const container = {
    positions: "fixed top-0 left-0 z-40",
    displays: "flex flex-col ",
    sizes: "w-full",
  };
  const top = {
    displays: "flex justify-between items-center ",
    sizes: "w-full h-20",
    paddings: "px-6",
    styles: "bg-white",
  };
  const subHeader = {
    displays: "flex items-center",
    paddings: "px-6",
    sizes: " h-15 w-full",
    styles: "bg-blue-grey text-white font-bold ",
  };

  return (
    <>
      <div className={cn(container)}>
        <div className={cn(top)}>
          <button onClick={() => navigate("/", clearView)}>
            <img
              src="/images/icons/devridge-logo.svg"
              alt="DEVRIDGE"
              className="w-28 h-5"
            />
          </button>
          <img
            onClick={() => setView("overlay")}
            src="/images/icons/hamburger-bar.svg"
            alt="hamburger-bar"
            className="w-7 h-7 cursor-pointer"
          />
        </div>
        {isLocated ? (
          <div className={cn(subHeader)}>
            {subHeaderString[location.split("/").join("")]}
          </div>
        ) : null}
      </div>
      <div className={isLocated ? "w-full h-35" : "w-full h-20"} />
    </>
  );
}

const subHeaderString = {
  questions: "개발 Q&A",
  communities: "커뮤니티",
} as Record<string, string>;
