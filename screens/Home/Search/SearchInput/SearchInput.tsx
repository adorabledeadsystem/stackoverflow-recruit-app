import { useEffect, useState } from 'react';

import styles from '../Search.module.scss'
import search from '@/assets/search.svg'
import useDebounce from '@/hooks/useDebounce';
import { useQuestionStore } from '@/store/questionStore/useQuestionStore';
import Image from 'next/image';
import { usePaginationStore } from '@/store/paginationStore/paginationStore';

export function SearchInput() {

  const { query, setQuery } = useQuestionStore();
  const { setCurrentPage } = usePaginationStore();
  const [inputValue, setInputValue] = useState(query);
  const debouncedQuery = useDebounce(inputValue, 300);

  useEffect(() => {
    setCurrentPage(1)
    setQuery(debouncedQuery);
  }, [debouncedQuery, setQuery]);

  return (
    <>
        <div className={styles.searchInput}>
            <Image src={search} alt='' />
            <input value={inputValue} type="text" placeholder='Введите название вопроса...' onChange={(e) => setInputValue(e.target.value)}/>
        </div>
    </>
  )
}
