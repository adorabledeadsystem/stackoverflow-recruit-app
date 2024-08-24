"use client"

import React from 'react';
import { useParams } from 'next/navigation';

import Loader from '../../components/Loader/Loader';

import styles from './QuestionDetails.module.scss';
import { useQuestion } from '@/services/useQuestion';
import { useComments } from '@/services/useComments';

const QuestionDetails: React.FC = () => {
  const params = useParams();
  const id  = params.id as string;

  const { data: question, isLoading } = useQuestion(id);
  const { data: comments, isLoading: isLoadingComments } = useComments(id);

  if (isLoading || isLoadingComments) return <Loader />;

  if (!question) return <p>Question not found</p>;

  return (
    <div className={styles.questionDetail}>
      <h2>{question.title}</h2>
      <p>Author: {question.owner.display_name}</p>
      <p>Tags: {question.tags.join(', ')}</p>
      <div dangerouslySetInnerHTML={{ __html: question.body }} />
      {comments && comments.length > 0 ? (
        <div className={styles.comments}>
          <h3>Comments:</h3>
          {comments.map((comment: any) => (
            <div key={comment.comment_id}>
              <p>{comment.body}</p>
              <div dangerouslySetInnerHTML={{ __html: comment.body }} />
              <small>— {comment.owner.display_name}</small>
            </div>
          ))}
        </div>
      )
      : <p>Комментарии отсутствуют</p>
      }
    </div>
  );
};

export default QuestionDetails;
