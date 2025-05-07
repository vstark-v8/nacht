import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router'
import LoginForm from './pages/loginForm'
import FileListPage from './pages/ListFiles'
import { useState, useEffect} from 'react'


function App() {
  const [isAuth,setIsAuth] = useState(false)
  useEffect(() =>{
        isAuthenticated();
      }
  ,[])
  
  const isAuthenticated = () => {
    setIsAuth(localStorage.getItem('token') !== null)
  }
  return (
    <Router>
      <Routes>
      <Route
          path="/"
          element={isAuth ? <Navigate to="/files" /> : <LoginForm onLoginSuccess={setIsAuth} />}
        />

        {/* Rota de arquivos, se não estiver autenticado, redireciona para / */}
        <Route
          path="/files"
          element={isAuth ? <FileListPage /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  )
}

export default App
