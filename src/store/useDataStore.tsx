import { create } from 'zustand';

type State = {
  products: Array<any>;
  setProducts: (data: Array<any>) => void;
  categories: Array<any>;
  setCategories: (data: Array<any>) => void;
};

export const useStore = create<State>((set) => ({
  products: [],
  setProducts: (products: Array<any>) => set({ products }),
  categories: [],
  setCategories: (categories: Array<any>) => set({ categories }),
}));
