import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Loginpage from './Components/Loginpage.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Loginpage />} />
    </Routes>
  );
};

export default App;