import { Dispatch, SetStateAction } from "react";

/**
 * State type for the React component
 * @template T
 * @description - State type for the component
 * @property {T} 0 - State value
 * @property {Dispatch<SetStateAction<T>>} 1 - State setter
 * @example
 * const [state, setState] = useState<T>(initialState);
 * @typedef {Array<T, Dispatch<SetStateAction<T>>>} State
 */
export type StateAction<T> = Dispatch<SetStateAction<T>>;
export type State<T> = [T, StateAction<T>];

/**
 * Size type
 * @enum {string}
 * @readonly
 * @description - Size type for the component
 * @property {"xs"} xs - Extra small size
 * @property {"sm"} sm - Small size
 * @property {"md"} md - Medium size
 * @property {"lg"} lg - Large size
 * @property {"xl"} xl - Extra large size
 * @property {"2xl"} 2xl - Double extra large size
 * @property {"full"} full - Full size
 */

export type Size = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "auto";

/**
 * Image size type
 * @enum {string}
 * @readonly
 * @description - Size type for the image
 * @property {"sub"} sub - Sub size
 * @property {"full"} full - Full size
 */

export type ImageSize = "sub" | "full";

export type OnClick = () => unknown | (() => Promise<unknown>);

export type Button = [string, OnClick];

export type Scripts = {
  script: string;
  subScript?: string;
};

export type Titles = {
  title: string;
  subtitle?: string | string[];
  isSub?: boolean;
  color?: string;
};

export type DataField = {
  title: string | number;
  type: string;
  size: string | number;
};

export interface Log<K extends string, T extends string | number> {
  prints: K[];
  logs: { [p in K]: T }[] | undefined;
}

export interface Order {
  orderBy: string;
  orderHow: "asc" | "desc" | "";
}
export interface WidgetEvent {
  event: string;
  type: "view" | "modal";
}

type Event<T extends boolean | string | null | undefined> = [
  T,
  React.ReactNode
];
export type Show = Event<boolean | string>;
export type Replace = Event<boolean | string | null | undefined>;
export interface ShowProps {
  widgets?: Show[];
  children: React.ReactNode;
}
export interface ReplaceProps {
  widgets?: Replace[];
  children: React.ReactNode;
}

export interface EventsProps {
  replaces?: Event<boolean | string | null | undefined>[];
  shows?: Event<boolean | string>[];
}
