import { create } from 'zustand';

type State = {
  sidebar: boolean;
  setSidebar: (value: boolean) => void;
};

export const useLayoutStore = create<State>((set) => ({
  sidebar: false,
  setSidebar: (sidebar) => set({ sidebar }),
}));
