import { AuthProvider } from './AuthContext'
import AppRoutes from './AppRoutes'

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

export default App

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import LoginPage from "./mainComponents/Loginpage.jsx";
// import LandPage from "./mainComponents/LandPage.jsx";
// import Tracker from "./mainComponents/Tracker.jsx";

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<LandPage />} />
//       <Route path="/login" element={<LoginPage />} />
//       <Route path="/tracker" element={<Tracker />} />
//     </Routes>
//   );
// };

// export default App;
