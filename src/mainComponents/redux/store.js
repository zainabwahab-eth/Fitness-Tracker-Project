// import { configureStore } from "@reduxjs/toolkit";
// import fitnessReducer from "./fitnessSlice";

// export default configureStore({
//     reducer: {
//         fitness: fitnessReducer
//     }
// })





// store.js
import { configureStore } from '@reduxjs/toolkit'
import fitnessReducer from './fitnessSlice'
import uiReducer from './uiSlice'

export default configureStore({
  reducer: {
    fitness: fitnessReducer,
    ui: uiReducer
  },
})
