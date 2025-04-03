import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './AuthContext'
import LandPage from './mainComponents/LandPage'
import LoginPage from './mainComponents/Loginpage'
import SignupPage from './mainComponents/SignupPage'
import Tracker from './mainComponents/Tracker'

// Protected route component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated()) {
    return <Navigate to="/login" />
  }

  return children
}

function AppRoutes() {
  const { isAuthenticated } = useAuth()

  return (
    <Routes>
      <Route path="/" element={<LandPage />} />
      <Route
        path="/login"
        element={isAuthenticated() ? <Navigate to="/tracker" /> : <LoginPage />}
      />
      <Route
        path="/signup"
        element={isAuthenticated() ? <Navigate to="/tracker" /> : <SignupPage />}
      />
      <Route
        path="/tracker"
        element={
          <ProtectedRoute>
            <Tracker />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default AppRoutes
