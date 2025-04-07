import themeReducer from "./themeSlice"; // 👈 import it

const store = configureStore({
  reducer: {
    fitness: fitnessReducer, // already exists
    theme: themeReducer,     // 👈 add this line
  },
});



// import { configureStore } from "@reduxjs/toolkit";
// import fitnessReducer from "./fitness";  // fitnessReducer is your partner's fitnessSlice
// import themeReducer from "./themeSlice";  // themeReducer is your themeSlice

// const store = configureStore({
//   reducer: {
//     fitness: fitnessReducer,  // fitness state
//     theme: themeReducer,      // theme state
//   },
// });

// export default store;
