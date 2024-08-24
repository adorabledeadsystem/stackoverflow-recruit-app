import { useEffect, useState } from 'react';

import styles from '../Search.module.scss'
import search from '@/assets/search.svg'
import useDebounce from '@/hooks/useDebounce';
import { useStore } from '@/store/questionStore/useStore';
import Image from 'next/image';

export function SearchInput() {

  const { query, setQuery } = useStore();
  const [inputValue, setInputValue] = useState(query);
  const debouncedQuery = useDebounce(inputValue, 300);

  useEffect(() => {
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
