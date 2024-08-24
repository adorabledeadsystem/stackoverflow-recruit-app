"use client"

import { Logo } from '../Logo/Logo';
import { Button } from '@/UI/Button/Button';

import styles from './Header.module.scss'
import { useSearch } from '@/services/useSearch';

export function Header() {

  const { refetch } = useSearch();
  
  return (
    <>
        <div className={styles.header}>
            <Logo />
            <div onClick={() => refetch()}>
              <Button>Обновить вопросы</Button>
            </div>
        </div>   
    </>
  )
}
