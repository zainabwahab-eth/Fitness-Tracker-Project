import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (email && name) {
      navigate("/tracker");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-6 rounded shadow-md w-96">
          <h1 className="text-xl font-semibold mb-4">ZIMCS</h1>
          <div className="flex flex-col items-center">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-4 p-2 border border-gray-300 rounded w-full"
              aria-label="Enter your name"
            />
            <br />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mb-4 p-2 border border-gray-300 rounded w-full"
              aria-label="Enter your email"
            />

            <br />
            <button
              className="bg-[#76DF02] w-full p-[10px] rounded-[30px] hover:bg-green-600 transition"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
