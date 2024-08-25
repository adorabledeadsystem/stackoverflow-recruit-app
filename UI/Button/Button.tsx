import { ButtonHTMLAttributes } from 'react'
import cn from "classnames"
import styles from './Button.module.scss'

type ButtonVariant = "primary" | "disabled" | "notFound"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  children: string;
}

export const Button: React.FC<ButtonProps> = ({variant, children}) => {
  return (
    <>
        <div className={styles.button}>
            <button disabled={variant === 'disabled'} className={cn(styles[variant], styles.buttonText)}>{children}</button>
        </div>
    </>
  )
}
