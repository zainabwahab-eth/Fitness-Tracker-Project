import React, { useState } from "react";
import "../Components/Loginpage.css"; // Import the new CSS file

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (email && name) {
      alert(`Logged in as  ${name} with email ${email}`);
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <h1 className="login-title">LOGO</h1>
          <div className="login-form">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="login-input"
              aria-label="Enter your name"
            />
            <br />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="login-input"
              aria-label="Enter your email"
            />
            <br />
            <button className="login-button" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;