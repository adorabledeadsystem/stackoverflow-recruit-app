"use client"

import React from 'react';

import styles from './ArrowButton.module.scss';

interface PaginationButtonProps {
    onClick: () => void;
    type: 'next' | 'prev';
  }
const ArrowButton: React.FC<PaginationButtonProps> = ({ onClick, type }) => {
    return (
        <div className={styles.arrowButton}  onClick={onClick}>
          <p className={`${type === 'next' ? styles.next : styles.prev}`}></p>
        </div>
    );
}

export default ArrowButton;
