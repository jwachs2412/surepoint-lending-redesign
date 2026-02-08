import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.scss'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  children: ReactNode
  fullWidth?: boolean
}

export const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  fullWidth = false,
  className = '',
  disabled = false,
  ...props
}: ButtonProps) => {
  const classNames = [
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    fullWidth ? styles['button--full-width'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={classNames} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

export default Button
