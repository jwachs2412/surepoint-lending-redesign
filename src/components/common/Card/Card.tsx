import { HTMLAttributes, ReactNode } from 'react'
import styles from './Card.module.scss'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  icon?: ReactNode
  title?: string
  hoverable?: boolean
}

export const Card = ({
  children,
  icon,
  title,
  hoverable = true,
  className = '',
  ...props
}: CardProps) => {
  const classNames = [
    styles.card,
    hoverable ? styles['card--hoverable'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classNames} {...props}>
      {icon && <div className={styles.card__icon}>{icon}</div>}
      {title && <h3 className={styles.card__title}>{title}</h3>}
      <div className={styles.card__content}>{children}</div>
    </div>
  )
}

export default Card
