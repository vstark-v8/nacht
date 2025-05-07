import { useState } from 'react'
import Input from '../components/input'
import Button from '../components/button'
import { useNavigate } from 'react-router'

type LoginFormProps = {
  onLoginSuccess: (value:boolean) => void
}

function LoginForm({ onLoginSuccess }: LoginFormProps)  {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const navigate = useNavigate()

  const handleLoginSuccess = () => {
    onLoginSuccess(true);
    navigate('/files')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const response = await fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ username, password })
    })

    if (response.ok) {
      response.json().then(
        (data) => {
          localStorage.setItem('token', data.token);
          handleLoginSuccess();
        }
      );
    } else {
      setError('Login inválido')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ position: 'absolute',
               left: '50%',
               top: '50%',
               transform: 'translate(-50%, -50%)' }}>
      <div
        style={{
          padding: '2rem',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(5,5,5,0.1)',
          width:'100%'
          
        }}
      >
      <h2 style={{color:'#007bff'}}>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Input
        type="text"
        placeholder="Usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit">Entrar</Button>
      </div>
      </div>
    </form>
  )
}

export default LoginForm
