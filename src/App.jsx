
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Loginpage.jsx";
import LandPage from "./Components/LandPage.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

    <Routes>
      <Route path="/" element={<LandPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
