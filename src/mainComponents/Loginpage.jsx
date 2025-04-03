import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../LoginPage.css'

const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = () => {
    if (email && name) {
      setIsLoading(true)

      setTimeout(() => {
        navigate('/tracker')
      }, 800)
    } else {
      document.getElementById('login-form').classList.add('shake')
      setTimeout(() => {
        document.getElementById('login-form').classList.remove('shake')
      }, 500)

      // Show validation messages
      if (!name) document.getElementById('name-input').classList.add('error')
      if (!email) document.getElementById('email-input').classList.add('error')
    }
  }

  const handleInputFocus = (e) => {
    e.target.classList.remove('error')
  }

  return (
    <div className="login-container">
      <div className="login-card" id="login-form">
        <div className="logo">
          <div className="logo-icon">
            <div className="dumbbell-bar"></div>
            <div className="dumbbell-weight left"></div>
            <div className="dumbbell-weight right"></div>
          </div>
          <h1 className="logo-text">FitTrack</h1>
        </div>

        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Sign in to continue your fitness journey</p>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name-input"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={handleInputFocus}
            aria-label="Enter your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email-input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={handleInputFocus}
            required
            aria-label="Enter your email"
          />
        </div>

        <button
          className={`login-button ${isLoading ? 'loading' : ''}`}
          onClick={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? <span className="spinner"></span> : 'Sign In'}
        </button>

        <div className="login-footer">
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
