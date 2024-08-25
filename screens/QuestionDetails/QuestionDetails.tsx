"use client"

import React from 'react';

import Loader from '../../UI/Loader/Loader';

import styles from './QuestionDetails.module.scss';
import { ICommentItem } from '@/types/comment';
import { useQuestion } from '@/services/useQuestion';
import { useComments } from '@/services/useComments';

type QuestionDetailsProps = {
  id: string;
};

const QuestionDetails: React.FC<QuestionDetailsProps> = ({id}) => {

  const { data: question, isLoading } = useQuestion(id);
  const { data: comments, isLoading: isLoadingComments } = useComments(id);

  if (isLoading || isLoadingComments) return <Loader />;

  if (!question) return <p>Вопрос не найден</p>;

  return (
    <div className={styles.questionDetail}>
      <div className={styles.questionHeader}>
        <h2 className={styles.title}>{question.title}</h2>
        <p className={styles.author}>Author: <span className={styles.authorName}>{question.owner.display_name}</span></p>
        <p className={styles.tags}>Tags: 
          {question.tags.map((tag:string) => {
            return(
              <span key={tag} className={styles.tagName}>{tag}</span>
            )
          })}
        </p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: question.body }} />
      {comments && comments.length > 0 ? (
        <div className={styles.comments}>
          <h3>Comments</h3>
          {comments.map((comment: ICommentItem) => (
            <div className={styles.comment} key={comment.comment_id}>
              <div className={styles.commentsTitle}>{comment.owner.display_name}</div>
              <div dangerouslySetInnerHTML={{ __html: comment.body }} />
            </div>
          ))}
        </div>
      )
      : <p className={styles.commentsEmpty}>Комментарии отсутствуют</p>
      }
    </div>
  );
};

export default QuestionDetails;
