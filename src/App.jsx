import { useState } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Loginpage from "./Components/Loginpage.jsx";
import LandPage from "./Component/LandPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandPage />} />
      <Route path="/login" element={<Loginpage />} />
    </Routes>
  );
};

export default App;
