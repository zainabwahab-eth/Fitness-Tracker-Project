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








// import { useSelector } from 'react-redux';  
// import { AuthProvider } from './AuthContext';
// import AppRoutes from './AppRoutes';
// import './App.css'; 

// function App() {
//   const darkMode = useSelector((state) => state.theme.darkMode); 
//   return (
//     <AuthProvider>
//       <div className={darkMode ? 'dark-mode' : ''}>
//         <AppRoutes />
//       </div>
//     </AuthProvider>
//   );
// }

// export default App;
