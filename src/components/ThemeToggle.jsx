// import { useDispatch, useSelector } from "react-redux";
// import { toggleDarkMode } from "../redux/themeSlice";
// import './ThemeToggle.css';

// const ThemeToggle = () => {
//   const dispatch = useDispatch();
//   const darkMode = useSelector((state) => state.theme.darkMode);

//   return (
//     <button onClick={() => dispatch(toggleDarkMode())}>
//       {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
//     </button>
//   );
// };

// export default ThemeToggle;



// ThemeToggle.jsx
// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { toggleDarkMode } from '../redux/themeSlice'
// import { toggleDarkMode } from './redux/themeSlice'



const ThemeToggle = () => {
  const dispatch = useDispatch()
  const darkMode = useSelector((state) => state.theme.darkMode)

  return (
    <button onClick={() => dispatch(toggleDarkMode())} className="sec-button">
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}

export default ThemeToggle
