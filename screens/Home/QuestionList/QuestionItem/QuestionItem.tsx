import Link from 'next/link';

import styles from '../QuestionList.module.scss'

interface QuestionItemProps {
  id: number;
  title: string;
  author: string;
  tags: string[];
  answers: number;
}

const QuestionItem: React.FC<QuestionItemProps> = ({ id, title, author, tags, answers }) => {

  return (
    <>
      <div className={styles.questionItem} key={id}>
        <Link href={`/question/${id}`}>
          <div className={styles.question}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.author}>Author: <span className={styles.authorName}>{author}</span></p>
            <p className={styles.answers}>Количество ответов: {answers}</p>
            <p className={styles.tags}>Tags: 
              {tags.map((tag) => {
                return(
                  <span key={tag} className={styles.tagName}>{tag}</span>
                )
              })}
            </p>
          </div>
        </Link>
      </div>
    </>
  )
}
export default QuestionItem;