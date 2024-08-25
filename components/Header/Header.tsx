"use client"

import { usePathname } from 'next/navigation';

import { Logo } from '../Logo/Logo';
import { Button } from '@/UI/Button/Button';

import styles from './Header.module.scss'
import { useSearch } from '@/services/useSearch';

export function Header() {

  const { refetch } = useSearch();
  const pathname = usePathname();
  
  return (
    <>
        <div className={styles.header}>
            <Logo />
            {pathname === '/' && 
              <div onClick={() => refetch()}>
                <Button variant='primary'>Обновить вопросы</Button>
              </div>
            }
        </div>   
    </>
  )
}
