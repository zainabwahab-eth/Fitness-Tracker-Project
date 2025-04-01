'use client'

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
      // Simulate a brief loading state before navigation
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

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");

//   const handleLogin = () => {
//     if (email && name) {
//       navigate("/tracker");
//     } else {
//       alert("Please fill in all fields");
//     }
//   };

//   return (
//     <>
//       <div className="flex justify-center items-center h-screen bg-gray-100">
//         <div className="bg-white p-6 rounded shadow-md w-96">
//           <h1 className="text-xl font-semibold mb-4">ZIMCS</h1>
//           <div className="flex flex-col items-center">
//             <input
//               type="text"
//               placeholder="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="mb-4 p-2 border border-gray-300 rounded w-full"
//               aria-label="Enter your name"
//             />
//             <br />
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="mb-4 p-2 border border-gray-300 rounded w-full"
//               aria-label="Enter your email"
//             />

//             <br />
//             <button
//               className="bg-[#76DF02] w-full p-[10px] rounded-[30px] hover:bg-green-600 transition"
//               onClick={handleLogin}
//             >
//               Login
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LoginPage;
