import { create } from "zustand";
import { Order, WidgetEvent } from "../interface";

interface WidgetProps {
  events: WidgetEvent[];

  setView: (prop: string) => void;
  removeView: (prop: string) => void;
  clearView: () => void;

  setModal: (prop: string) => void;
  removeModal: (prop: string) => void;
  clearModal: () => void;

  // order for widgetsx
  order: Record<string, Order[]>;
  setOrder: (prop: string, id: string) => void;

  // Temporary data for widgets
  tempData: Record<string, string | number>;
  setTempData: (prop: Record<string, string | number>) => void;
  clearTempData: () => void;

  // Controll tag state
  flag: boolean;
  setFlag: () => void;
  isOwn: boolean;
  setIsOwn: (prop: boolean) => void;

  // Controll Dark Mode
  isDark: boolean;
  setDark: () => void;
}

export const useWidgetStore = create<WidgetProps>((set) => ({
  events: [],
  setView: (prop) =>
    set((state) => {
      if (state.events.find(({ event }) => event === prop) !== undefined)
        return state;
      return {
        events: [...state.events, { event: prop, type: "view" }],
      };
    }),
  removeView: (prop) => {
    set((state) => ({
      events: state.events.filter(({ event }) => event !== prop),
    }));
  },
  clearView: () =>
    set((state) => ({
      events: state.events.filter(({ type }) => type !== "view"),
    })),

  order: {},
  setOrder: (id, prop) => {
    set((state) => {
      const currentOrder = state.order[id] ?? [];
      const update = (): Order => {
        const temp = currentOrder.find(({ orderBy }) => orderBy === prop);
        if (temp !== undefined) {
          return {
            ...temp,
            orderHow:
              temp.orderHow === "asc"
                ? "desc"
                : temp.orderHow === "desc"
                ? ""
                : "asc",
          };
        }
        return { orderBy: prop, orderHow: "asc" };
      };
      const updatedOrder = [
        ...currentOrder.filter(({ orderBy }) => orderBy !== prop),
        update(),
      ];
      return {
        order: { ...state.order, [id]: updatedOrder },
      };
    });
  },

  setModal: (prop) =>
    set((state) => ({
      events: [...state.events, { event: prop, type: "modal" }],
    })),
  removeModal: (prop) => {
    set((state) => ({
      events: state.events.filter(({ event }) => event !== prop),
    }));
  },
  clearModal: () =>
    set((state) => ({
      events: state.events.filter(({ type }) => type !== "modal"),
    })),

  tempData: {},
  setTempData: (prop) =>
    set((state) => ({ tempData: { ...state.tempData, ...prop } })),
  clearTempData: () => set({ tempData: {} }),

  flag: false,
  setFlag: () => set((state) => ({ flag: !state.flag })),

  isOwn: false,
  setIsOwn: (prop) => set({ isOwn: prop }),

  isDark: false,
  setDark: () => set((state) => ({ isDark: !state.isDark })),
}));
