"use client"

import { useEffect } from 'react';

import QuestionItem from './QuestionItem/QuestionItem'
import Loader from '@/UI/Loader/Loader';
import ArrowButton from '@/UI/ArrowButton/ArrowButton';

import styles from './QuestionList.module.scss'
import { IQuestionItem } from '@/types/question';
import { useQuestionStore } from '@/store/questionStore/useQuestionStore';
import { usePaginationStore } from '@/store/paginationStore/usePaginationStore';
import { useSearch } from '@/services/useSearch';

export function QuestionList() {

  const { hasMore } = useQuestionStore();
  const { currentPage, setCurrentPage } = usePaginationStore();
  const { data, isLoading, refetch } = useSearch();

  useEffect(() => {
    refetch()
  }, [currentPage])

  const handlePaginatePrev = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePaginateNext = () => {
    if (hasMore) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  if (isLoading) return <Loader />;

  return (
    <>
      {data && hasMore &&
        <div className={styles.paginationArrows}>
          <ArrowButton onClick={handlePaginatePrev} type='prev'/>
          <p className={styles.page}>{currentPage}</p>
          <ArrowButton onClick={handlePaginateNext} type='next'/>
        </div>
      }
      <div className={styles.questionList}>
        {data && data.length > 0 ? data.map((question:IQuestionItem) => (
            <QuestionItem  
              key={question.question_id}
              id={question.question_id}
              title={question.title} 
              author={question.owner.display_name} 
              tags={question.tags}
              answers={question.answer_count}
            />
        ))
        : <p className={styles.questionListEmpty}>Вопросы не найдены</p>
        }
      </div>
    </>
  )
}
