// feyisara added
import { createSlice } from "@reduxjs/toolkit"

// Load dark mode preference from localStorage if available
const loadDarkModeFromStorage = () => {
  try {
    const storedDarkMode = localStorage.getItem("darkMode")
    return storedDarkMode ? JSON.parse(storedDarkMode) : false
  } catch (error) {
    console.error("Error loading dark mode from localStorage:", error)
    return false
  }
}

// Save dark mode preference to localStorage
const saveDarkModeToStorage = (isDarkMode) => {
  try {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode))
  } catch (error) {
    console.error("Error saving dark mode to localStorage:", error)
  }
}

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    darkMode: loadDarkModeFromStorage(),
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode
      saveDarkModeToStorage(state.darkMode)
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload
      saveDarkModeToStorage(state.darkMode)
    },
  },
})

export const { toggleDarkMode, setDarkMode } = uiSlice.actions
export default uiSlice.reducer


// feyisara added ends here