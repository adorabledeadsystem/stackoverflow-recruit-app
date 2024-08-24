import { Metadata } from 'next';

import QuestionDetails from '@/screens/QuestionDetails/QuestionDetails';
import { fetchCommentsByQuestionId } from '@/services/useComments';


export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const question = await fetchCommentsByQuestionId(params.id);

  return {
    title: question.title,
    description: question.description || "Question details",
  };
}

export default function Questions() {
  return (
      <QuestionDetails />
  );
}
