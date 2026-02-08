import { HTMLAttributes, ReactNode, ElementType } from 'react'
import styles from './Typography.module.scss'

type TypographyVariant = 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'body-lg' | 'body' | 'small' | 'xs'

interface BaseTypographyProps {
  variant?: TypographyVariant
  children: ReactNode
  className?: string
  color?: 'primary' | 'blue' | 'teal' | 'orange' | 'neutral' | 'white'
  align?: 'left' | 'center' | 'right'
}

export type TypographyProps = BaseTypographyProps & Omit<HTMLAttributes<HTMLElement>, keyof BaseTypographyProps>

const variantMapping: Record<TypographyVariant, ElementType> = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  'body-lg': 'p',
  body: 'p',
  small: 'p',
  xs: 'span',
}

export const Typography = ({
  variant = 'body',
  children,
  className = '',
  color,
  align,
  ...props
}: TypographyProps) => {
  const Component = variantMapping[variant]

  const classNames = [
    styles[variant],
    color ? styles[`text-${color}`] : '',
    align ? styles[`text-${align}`] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Component className={classNames} {...props}>
      {children}
    </Component>
  )
}

// Convenience components
export const Display = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="display" {...props} />
)

export const Heading1 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="h1" {...props} />
)

export const Heading2 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="h2" {...props} />
)

export const Heading3 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="h3" {...props} />
)

export const Heading4 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="h4" {...props} />
)

export const BodyLarge = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="body-lg" {...props} />
)

export const Body = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="body" {...props} />
)

export const Small = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="small" {...props} />
)

export default Typography
