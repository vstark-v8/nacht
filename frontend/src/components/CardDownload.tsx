import React from 'react'
import Button from './button'

type CardProps = {
  title: string
  description: string
  url: string
}

const CardDownload: React.FC<CardProps> = ({ title, description, url }) => {
  const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const backgroundColor = darkMode ? '#2e2e2e' : '#f5f5f5'
  const textColor = darkMode ? '#fff' : '#333'
  const borderColor = darkMode ? '#444' : '#ddd'

  async function downloadFile(url: string, title: string) {
    const response = await fetch(url, {
      method: 'GET',
      credentials: 'include', // se precisar de cookie ou autenticação
    });
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
  
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(blobUrl);
  }
  

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
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem'
      }}>
        <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{title}</h3>
        <Button
          onClick={() => { 
            downloadFile( url, title)
          }}
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
