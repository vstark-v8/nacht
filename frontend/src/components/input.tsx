import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...props }, ref) => {
    return (
      <div style={{ marginBottom: '1rem' }}>
        {label && <label style={{ display: 'block', marginBottom: '0.25rem' }}>{label}</label>}
        <input
          ref={ref}
          {...props}
          style={{
            padding: '0.5rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            width: '100%',
            ...props.style
          }}
        />
      </div>
    )
  }
)

export default Input