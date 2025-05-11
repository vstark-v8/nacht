import React from 'react'
import Button from './button'
import { FiSearch } from 'react-icons/fi'

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: () => void
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch, ...props }) => {
  return (
    <div style={{
        borderRadius: '1rem',
        margin: '1rem',
        flex: 1,
        width:'100%',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        display:'flex'
      }}>
      <input
        {...props}
        style={{
          padding: '0.5rem 0.5rem 0.5rem 0.5rem', // espaço extra à direita pro botão
          border: '1px solid #ccc',
          borderRadius: '4px',
          width:"43%",
          ...props.style,
        }}
      />
      <Button style={{background:'gray', marginLeft:5}} onClick={onSearch}>
        <FiSearch size={15} />
      </Button>
    </div>
  )
}

export default SearchInput
