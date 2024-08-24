"use client"

import styles from './Search.module.scss'
import { SearchInput } from './SearchInput/SearchInput';
import { SortBox } from './SortBox/SortBox';

export function Search() {
  return (
    <>
        <div className={styles.search}>
            <SearchInput  />
            <SortBox />
        </div>
    </>
  )
}
