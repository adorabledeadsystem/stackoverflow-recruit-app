import { useQuery } from '@tanstack/react-query';

import axiosInstance from '@/api/axiosInstance';

export const fetchCommentsByQuestionId = async (id: string) => {
  const response = await axiosInstance.get(`/questions/${id}/answers`, {
    params: {
      order: 'desc',
      sort: 'votes',
      filter: "!nNPvSNdWme",
    },
  });
  return response.data.items;
};

export const useComments = (id: string) => {
  return useQuery({
    queryKey: ['comments', id], 
    queryFn: () => fetchCommentsByQuestionId(id)
})};

