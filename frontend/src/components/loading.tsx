import React from 'react'

const LoadingComponent: React.FC = () => {
  return (
    <div style={styles.overlay}>
      <div style={styles.spinner}></div>
    </div>
  )
}

const styles = {
  overlay: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '6px solid #ccc',
    borderTop: '6px solid #007bff',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  }
}

// CSS para o spinner (pode colocar no seu CSS global)
const styleSheet = document.createElement('style')
styleSheet.innerHTML = `
@keyframes spin {
  to { transform: rotate(360deg); }
}
`
document.head.appendChild(styleSheet)

export default LoadingComponent
