import React from 'react'
import { BsDisplay } from 'react-icons/bs'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const backgroundColor = darkMode ? '#2e2e2e' : '#f5f5f5'
    if (!isOpen) return null
    return (
        <div style={styles.overlay} onClick={onClose}>
            <div style={{
                background: backgroundColor,
                padding: '2rem',
                borderRadius: '8px',
                position: 'relative' as const,
                minWidth: '300px',
                maxWidth: '90%',
            }} onClick={e => e.stopPropagation()}>
                <button onClick={onClose} style={styles.closeButton}>
                    X
                </button>
                {children}
            </div>
        </div>
    )
}

const styles = {
    overlay: {
        position: 'fixed' as const,
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
    },
    closeButton: {
        position: 'absolute' as const,
        top: '10px',
        right: '10px',
        background: 'transparent',
        
        border: 'none',
        fontSize: '1rem',
        cursor: 'pointer'
    }
}

export default Modal
