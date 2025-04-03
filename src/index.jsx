import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import './index.css'

// Add error handling for image loading
// Add this at the top of the file, after the imports
const handleImageError = (e) => {
  e.target.onerror = null
  e.target.src = '/placeholder.svg?height=24&width=24'
}

// Export this function so it can be used in other components
window.handleImageError = handleImageError

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
)
