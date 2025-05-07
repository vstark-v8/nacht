// Header.tsx
import React from 'react'

const Header: React.FC = () => {
        const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        const backgroundColor = darkMode ? '#2e2e2e' : '#f5f5f5'
        const textColor = darkMode ? '#fff' : '#333'
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      backgroundColor: backgroundColor,
      color: textColor,
      padding: '1rem 1rem', // menor padding
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      zIndex: 1000
    }}>
      <h1 style={{ fontSize: '1.5rem', margin: 0, marginLeft:10 }}>Nacht</h1>
    </header>
  )
}

export default Header
