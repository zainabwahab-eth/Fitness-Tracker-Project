import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/Loginpage.jsx";
import LandPage from "./components/LandPage.jsx";
import Tracker from "./components/Tracker.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/tracker" element={<Tracker />} />
    </Routes>
  );
};

export default App;
