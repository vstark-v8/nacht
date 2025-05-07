// Footer.tsx
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#333',
      color: '#fff',
      padding: '0.1rem 0.1rem',
      textAlign: 'center',
      boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
      zIndex: 1000
    }}>
      <p style={{fontSize: '0.7rem'}}>&copy; 2025 Nacht</p>
    </footer>
  )
}

export default Footer
