import { useState } from "react";
import "./App.css";
import Form from "./components/FormOverlay";
import Tracker from "./components/Tracker";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    {/* <Form /> */}
    <Tracker/>
    </>
  )
  ;
}

export default App;
