import { GetServerSideProps, Metadata } from 'next';

import QuestionDetails from '@/screens/QuestionDetails/QuestionDetails';
import { fetchAllQuestionIds, fetchQuestionById } from '@/services/useQuestion';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };
  const question = await fetchQuestionById(id);

  if (!question) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      question,
    },
  };
};
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
