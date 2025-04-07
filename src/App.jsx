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







// import { useSelector } from "react-redux";
// import ThemeToggle from "./components/ThemeToggle"; // update path accordingly
// import './App.css'; // or wherever your general styles are

// const App = () => {
//   const darkMode = useSelector((state) => state.theme.darkMode);

//   // Dynamically add/remove dark class from body
//   React.useEffect(() => {
//     document.body.className = darkMode ? "dark-mode" : "";
//   }, [darkMode]);

//   return (
//     <div>
//       <nav>
//         <ThemeToggle />
//       </nav>
//       {/* rest of your app */}
//     </div>
//   );
// };

// export default App;
