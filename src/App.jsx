import { useState } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Loginpage.jsx";
import LandPage from "./Components/LandPage.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
