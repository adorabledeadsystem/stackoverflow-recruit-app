import { Metadata } from 'next';

import QuestionDetails from '@/screens/QuestionDetails/QuestionDetails';
import { fetchAllQuestionIds, fetchQuestionById } from '@/services/useQuestion';

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const ids = await fetchAllQuestionIds(); 
  if(!ids || ids.length === 0){
    return [{ id: 'not-found'}]
  }
  return ids.map((id: string) => ({ id: id }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const question = await fetchQuestionById(params.id);

  if (!question){
    return {
      title: 'UnknownQuestion',
      description: 'UnknownQuestion'
    }
  }

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
