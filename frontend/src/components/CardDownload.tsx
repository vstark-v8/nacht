import React from 'react'
import Button from './button'

type CardProps = {
  title: string
  description: string
  url: string
}

const CardDownload: React.FC<CardProps> = ({ title, description }) => {
  const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const backgroundColor = darkMode ? '#2e2e2e' : '#f5f5f5'
  const textColor = darkMode ? '#fff' : '#333'
  const borderColor = darkMode ? '#444' : '#ddd'

  return (
    <div style={{
      backgroundColor,
      color: textColor,
      border: `1px solid ${borderColor}`,
      borderRadius: '1rem',
      padding: '1.5rem',
      margin: '1rem',
      flex: 1,
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    }}>
      {/* Container do título e botão */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem'
      }}>
        <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{title}</h3>
        <Button
          onClick={() => { console.log('teste') }}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            border: 'none',
            backgroundColor: darkMode ? '#007bff' : '#0056b3',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Download
        </Button>
      </div>
      
      <p>{description}</p>
    </div>
  )
}

export default CardDownload
