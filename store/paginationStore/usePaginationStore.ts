"use client"

import { create } from 'zustand';

interface StoreState {
    currentPage: number;
    setCurrentPage: (currentPage: number) => void;
}

export const usePaginationStore = create<StoreState>((set) => ({
    currentPage: 1,
    setCurrentPage: (currentPage) => set({ currentPage }),
}));

