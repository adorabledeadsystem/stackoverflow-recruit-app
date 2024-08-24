"use client"

import { create } from 'zustand';

interface StoreState {
    query: string;
    sort: string;
    setQuery: (query: string) => void;
    setSort: (sort: string) => void;
}

const getInitialSort = () => {
    if (typeof window !== 'undefined') {
      const savedSort = localStorage.getItem('sort');
      return savedSort || 'creation'; 
    }
    return 'creation';
  };
  
  
export const useStore = create<StoreState>((set) => ({
    query: '',
    sort:  getInitialSort(),
    setQuery: (query) => set({ query }),
    setSort: (sort) => {
        set({ sort });
        if (typeof window !== 'undefined') {
          localStorage.setItem('sort', sort);
        }
    },
}));

