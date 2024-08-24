"use client"

import { useQuery } from '@tanstack/react-query';

import axiosInstance from '../api/axiosInstance';
import { useStore } from '../store/questionStore/useStore';

const fetchQuestions = async (query: string, sort: string) => {
  const params = query.length > 0 ? { intitle: query, sort } : { order: 'desc', sort: sort };
  const endpoint = query ? '/search' : '/questions';
  const response = await axiosInstance.get(endpoint, { params });
  return response.data.items;
};

export const useSearch = () => {
    const { query, sort } = useStore();
    return useQuery({
        queryKey: ['questions', query, sort], 
        queryFn: () => fetchQuestions(query, sort),
    });
};
