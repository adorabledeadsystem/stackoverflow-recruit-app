import { useQuery } from '@tanstack/react-query';

import axiosInstance from '../api/axiosInstance';

export const fetchCommentsByQuestionId = async (id: string) => {
  const response = await axiosInstance.get(`/questions/${id}/comments`, {
    params: {
      site: 'stackoverflow',
      order: 'desc',
      sort: 'creation',
    },
  });
  return response.data.items;
};

export const useComments = (id: string) => {
  return useQuery({
    queryKey: ['comments', id], 
    queryFn: () => fetchCommentsByQuestionId(id)
})};

