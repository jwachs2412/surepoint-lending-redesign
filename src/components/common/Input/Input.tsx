import { InputHTMLAttributes, forwardRef } from 'react'
import styles from './Input.module.scss'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, id, required, className = '', ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`
    const errorId = error ? `${inputId}-error` : undefined
    const helperId = helperText ? `${inputId}-helper` : undefined

    const inputClassNames = [
      styles.input,
      error ? styles['input--error'] : '',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div className={styles['input-wrapper']}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
            {required && <span className={styles.required} aria-label="required"> *</span>}
          </label>
        )}
        
        <input
          ref={ref}
          id={inputId}
          className={inputClassNames}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={[errorId, helperId].filter(Boolean).join(' ') || undefined}
          required={required}
          {...props}
        />
        
        {error && (
          <span id={errorId} className={styles.error} role="alert">
            {error}
          </span>
        )}
        
        {helperText && !error && (
          <span id={helperId} className={styles.helper}>
            {helperText}
          </span>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
