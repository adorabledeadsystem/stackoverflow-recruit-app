import { useQuery } from '@tanstack/react-query';

import axiosInstance from '@/api/axiosInstance';

export async function fetchAllQuestionIds(): Promise<string[]> {
  const response = await axiosInstance.get('/questions');
  return response.data.items.map((question: { id: string }) => question.id);
}

export const fetchQuestionById = async (id: string) => {
  const response = await axiosInstance.get(`/questions/${id}`, {
  params: {
    site: "stackoverflow",
    filter: "5147LhBYl",
  }});
  return response.data.items[0];
};

export const useQuestion = (id: string) => {
    return useQuery({
        queryKey: ['question', id],
        queryFn: () => fetchQuestionById(id), 
        enabled: !!id,
    })
};
