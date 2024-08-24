"use client"

import { useQuery } from '@tanstack/react-query';

import axiosInstance from '../api/axiosInstance';

const fetchQuestionById = async (id: string) => {
  const response = await axiosInstance.get(`/questions/${id}`);
  return response.data.items[0];
};

export const useQuestion = (id: string) => {
    return useQuery({
        queryKey: ['question', id],
        queryFn: () => fetchQuestionById(id), 
        enabled: !!id,
    })
};
