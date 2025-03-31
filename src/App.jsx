import { useState } from "react";
import "./App.css";
import LandPage from "./Component/LandPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <LandPage />
    </div>
  );
}

export default App;
