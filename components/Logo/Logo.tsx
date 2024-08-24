import styles from './Logo.module.scss'

export function Logo() {
  return (
    <>
        <div className={styles.logo}>
            <h1 className={styles.logoTitle}>StackOverflowList</h1>
        </div>
    </>
  )
}
