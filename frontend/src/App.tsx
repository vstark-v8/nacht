import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router'
import LoginForm from './pages/loginForm'
import FileListPage from './pages/ListFiles'
import { AuthProvider, useAuth } from './context/AuthContext'

function AppRoutes() {
  const { isAuth } = useAuth()

  return (
    <Routes>
      <Route
        path="/"
        element={!isAuth ? <LoginForm /> : <Navigate to="/files" />}
      />
      <Route
        path="/files"
        element={isAuth ? <FileListPage /> : <Navigate to="/" />}
      />
    </Routes>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  )
}
