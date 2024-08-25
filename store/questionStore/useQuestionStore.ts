"use client"

import { create } from 'zustand';

interface StoreState {
    query: string;
    sort: string;
    hasMore: boolean;
    setQuery: (query: string) => void;
    setSort: (sort: string) => void;
    setHasMore: (hasMore: boolean) => void;
}

const getInitialSort = () => {
    if (typeof window !== 'undefined') {
      const savedSort = localStorage.getItem('sort');
      return savedSort || 'creation'; 
    }
    return 'creation';
};
  
  
export const useQuestionStore = create<StoreState>((set) => ({
    query: '',
    sort:  getInitialSort(),
    hasMore: false,
    setQuery: (query) => set({ query }),
    setSort: (sort) => {
      set({ sort });
      if (typeof window !== 'undefined') {
        localStorage.setItem('sort', sort);
        }
        },
    setHasMore: (hasMore) => set({ hasMore }),
}));

