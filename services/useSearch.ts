"use client"

import { useQuery } from '@tanstack/react-query';

import axiosInstance from '@/api/axiosInstance';
import { useQuestionStore } from '@/store/questionStore/useQuestionStore';
import { usePaginationStore } from '@/store/paginationStore/paginationStore';

const fetchQuestions = async (query: string, sort: string, setHasMore: (hasMore:boolean) => void, currentPage: number) => {
  const params = query.length > 0 ? { intitle: query, sort, page: currentPage, pagesize: 5 } : { order: 'desc', sort: sort, page: currentPage, pagesize: 5 };
  const endpoint = query ? '/search' : '/questions';
  const response = await axiosInstance.get(endpoint, { params });
  setHasMore(response.data.has_more)
  return response.data.items;
};

export const useSearch = () => {
    const { query, sort, setHasMore } = useQuestionStore();
    const { currentPage } = usePaginationStore();
    return useQuery({
        queryKey: ['questions', query, sort], 
        queryFn: () => fetchQuestions(query, sort, setHasMore, currentPage),
    });
};
