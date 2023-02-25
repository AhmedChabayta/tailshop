import { create } from 'zustand';
import { CardDataInterface } from './dataStoreTypes';
import { useEffect, useMemo } from 'react';

type State = {
  isLoading: boolean;
  data: CardDataInterface[];
  error: Error | null;
  fetchData: () => Promise<void>;
};

const useStore = create<State>((set) => ({
  data: [],
  isLoading: true,
  error: null,
  fetchData: async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      set({ data, isLoading: false });
    } catch (error: any) {
      set({ error, isLoading: false });
    }
  },
}));
