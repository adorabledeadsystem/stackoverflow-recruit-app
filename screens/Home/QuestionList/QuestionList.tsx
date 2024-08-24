"use client"

import QuestionItem from './QuestionItem/QuestionItem'
import Loader from '@/components/Loader/Loader';

import styles from './QuestionList.module.scss'
import { useSearch } from '@/services/useSearch';

export function QuestionList() {

  const { data, isLoading } = useSearch();

  if (isLoading) return <Loader />;

  return (
    <>
      <div className={styles.questionList}>
        {data?.map((question:any) => (
            <QuestionItem  
              key={question.question_id}
              id={question.question_id}
              title={question.title} 
              author={question.owner.display_name} 
              tags={question.tags}
              answers={question.answer_count}
            />
        ))}
        <QuestionItem  
          id={232323}
          title={'Тестовое название'} 
          author={"Кирилл Езепчук"} 
          tags={['c++', 'java']}
          answers={15}
        />
      </div>
    </>
  )
}
