import { useQuery } from '@tanstack/react-query';

import axiosInstance from '@/api/axiosInstance';
import { IQuestionItem } from '@/types/IQuestionItem';

export async function fetchAllQuestionIds(page: number, pageSize: number) {
  const response = await axiosInstance.get('/questions',{
    params: {
      page: page,
      pageSize: pageSize,
    },
  });
  console.log(response.data)
  return {
    data: response.data.items.map((question: IQuestionItem) => question.question_id.toString()),
    has_more: response.data.has_more
  }
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
