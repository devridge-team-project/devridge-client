import { Fragment } from "react";
import { useWidgetStore } from "shared/store";
import { ReplaceProps, ShowProps } from "interface";

function Show({ components, children }: ShowProps) {
  const { events } = useWidgetStore();
  return (
    <>
      {children}
      {components?.map(([flag, Component]) => {
        if (typeof flag === "boolean") return flag ? <>{Component}</> : null;
        return events?.some(({ event }) => event === flag) ? <>{Component}</> : null;
      })}
    </>
  );
}

function Replace({ exceptions, children }: ReplaceProps) {
  const { events } = useWidgetStore();
  if (!exceptions) return <>{children}</>;
  const trueComponents = exceptions
    .filter(([exception]) => exception)
    .map(([flag, Component], index) => {
      if (typeof flag === "string") {
        return events?.some(({ event }) => event === flag) ? <>{Component}</> : null;
      }
      return <Fragment key={index}>{Component}</Fragment>;
    })
    .filter((component) => component !== null);
  return <>{trueComponents.length > 0 ? trueComponents : children}</>;
}

const Events = {
  Show,
  Replace,
};

export default Events;
