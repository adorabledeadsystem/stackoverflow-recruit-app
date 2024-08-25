import { Metadata } from 'next';

import QuestionDetails from '@/screens/QuestionDetails/QuestionDetails';
import { fetchQuestionById } from '@/services/useQuestion';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const question = await fetchQuestionById(params.id);

  return {
    title: question?.title,
    description: question?.description,
  };
}

export default async function QuestionPage({ params }: { params: { id: string } }) {
  return (
    <QuestionDetails id={params.id} />
  );
}
