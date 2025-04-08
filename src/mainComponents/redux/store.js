import { configureStore } from "@reduxjs/toolkit"
import fitnessReducer from "./fitnessSlice"
import uiReducer from "./uiSlice"

// Create the Redux store
const store = configureStore({
  reducer: {
    fitness: fitnessReducer,
    ui: uiReducer,
  },
  // Add middleware configuration if needed
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check if needed
    }),
})

// Export the store
export default store
