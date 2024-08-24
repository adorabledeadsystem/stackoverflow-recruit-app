import styles from './Button.module.scss'

export function Button({children}:{children: string}) {
  return (
    <>
        <div className={styles.button}>
            <button className={styles.buttonText}>{children}</button>
        </div>
    </>
  )
}
