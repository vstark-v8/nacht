// Header.tsx
import { FiLogOut } from 'react-icons/fi'
import Button from './button'
import React from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../context/AuthContext'
const Header: React.FC = () => {
    const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const backgroundColor = darkMode ? '#2e2e2e' : '#f5f5f5'
    const textColor = darkMode ? '#fff' : '#333'

    const isAuth = localStorage.getItem('token') != null;
    const navigate = useNavigate()
    const {logout} = useAuth()
    const handleLogout = () => {      
      const token = localStorage.getItem('token');

      fetch('http://localhost:8000/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        },
        credentials: 'include'
      }).then(() => {
          logout()
          navigate('/')
      })
    }
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
      zIndex: 1000,
      flex:1,
      display:'flex',
      flexDirection:'row'
    }}>
      <div style={{flex:1}}>
      <h1 style={{ fontSize: '1.5rem', margin: 0, marginLeft:10 }}>Nacht</h1>
      </div>
      { isAuth &&
        <div style={{
        marginRight: '2rem',
        display:'flex'
      }}>
      
      <Button type='button' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={handleLogout}>
        <FiLogOut />
      </Button>
      </div>

      }
    </header>
  )
}

export default Header
