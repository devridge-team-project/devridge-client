import React, { Fragment } from "react";
import { useWidgetStore } from "./../../../shared/store";
import { ReplaceProps, ShowProps } from "./../../../interface/Property";

function Show({ widgets, children }: ShowProps) {
  const { events } = useWidgetStore();
  return (
    <>
      {children}
      {widgets?.map(([flag, Component], index) => {
        const isVisible =
          typeof flag === "boolean"
            ? flag
            : events?.some(({ event }) => event === flag);
        const event = () => {
          if (typeof flag === "string") {
            return flag;
          }
        };
        if (React.isValidElement(Component)) {
          const ComponentWithVisibility = React.cloneElement(
            Component as React.ReactElement<any>,
            {
              event: event(),
              isVisible,
            }
          );
          return <Fragment key={index}>{ComponentWithVisibility}</Fragment>;
        }
        return null;
      })}
    </>
  );
}

function Replace({ widgets, children }: ReplaceProps) {
  const { events } = useWidgetStore();
  if (!widgets) return <>{children}</>;
  const trueComponents = widgets
    .filter(([widget]) => widget)
    .map(([flag, Component], index) => {
      if (typeof flag === "string") {
        return events?.some(({ event }) => event === flag) ? (
          <>{Component}</>
        ) : null;
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
