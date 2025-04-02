import { createContext, useState, useContext, useEffect } from 'react'

// Create the authentication context
const AuthContext = createContext(null)

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext)

// Provider component that wraps your app and makes auth object available to any child component that calls useAuth()
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Check if user is logged in when the component mounts
  useEffect(() => {
    const user = localStorage.getItem('fittrack_user')
    if (user) {
      setCurrentUser(JSON.parse(user))
    }
    setLoading(false)
  }, [])

  // Sign up function
  const signup = (name, email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Create a new user object
        const newUser = {
          id: Date.now().toString(),
          name,
          email,
          createdAt: new Date().toISOString()
        }

        // Store user in localStorage
        localStorage.setItem('fittrack_user', JSON.stringify(newUser))

        const users = JSON.parse(localStorage.getItem('fittrack_users') || '[]')
        users.push({ ...newUser, password })
        localStorage.setItem('fittrack_users', JSON.stringify(users))

        // Update current user
        setCurrentUser(newUser)
        resolve(newUser)
      }, 1000) // Simulate network delay
    })
  }

  // Login function
  const login = (email, name) => {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Get users from localStorage
        const users = JSON.parse(localStorage.getItem('fittrack_users') || '[]')

        // Find user with matching email and name
        const user = users.find((u) => u.email === email && u.name === name)

        if (user) {
          // Store the current user (without password)
          // eslint-disable-next-line no-unused-vars
          const { password, ...userWithoutPassword } = user
          localStorage.setItem('fittrack_user', JSON.stringify(userWithoutPassword))
          setCurrentUser(userWithoutPassword)
          resolve(userWithoutPassword)
        } else {
          // For demo purposes, create a new user if not found
          const newUser = {
            id: Date.now().toString(),
            name,
            email,
            createdAt: new Date().toISOString()
          }

          localStorage.setItem('fittrack_user', JSON.stringify(newUser))

          // Add to users array
          users.push({ ...newUser, password: 'demo-password' })
          localStorage.setItem('fittrack_users', JSON.stringify(users))

          setCurrentUser(newUser)
          resolve(newUser)
        }
      }, 800) // Simulate network delay
    })
  }

  // Logout function
  const logout = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.removeItem('fittrack_user')
        setCurrentUser(null)
        resolve()
      }, 500)
    })
  }

  // Check if user is authenticated
  const isAuthenticated = () => {
    return !!currentUser
  }

  const value = {
    currentUser,
    signup,
    login,
    logout,
    isAuthenticated
  }

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}
