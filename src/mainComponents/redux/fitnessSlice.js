
import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  const data = localStorage.getItem("fitnessData");
  const streak = localStorage.getItem("streak");
  const lastWorkoutDate = localStorage.getItem("lastWorkoutDate");
  
  return {
    entries: data ? JSON.parse(data) : [],
    streak: streak ? parseInt(streak) : 0,
    lastWorkoutDate: lastWorkoutDate || null,
  };
};

const saveToLocalStorage = (entries, streak, lastWorkoutDate) => {
  localStorage.setItem("fitnessData", JSON.stringify(entries));
  localStorage.setItem("streak", streak);
  localStorage.setItem("lastWorkoutDate", lastWorkoutDate);
};

export const fitnessSlice = createSlice({
  name: "fitness",
  initialState: loadFromLocalStorage(),
  reducers: {
    addEntry: (state, action) => {
      const today = new Date().toISOString().split("T")[0]; // e.g. '2025-04-08'

      // Calculate streak
      if (state.lastWorkoutDate) {
        const prevDate = new Date(state.lastWorkoutDate);
        const currDate = new Date(today);
        const diffInTime = currDate.getTime() - prevDate.getTime();
        const diffInDays = diffInTime / (1000 * 3600 * 24);

        if (diffInDays === 1) {
          state.streak += 1; // consecutive day
        } else if (diffInDays > 1) {
          state.streak = 1; // missed days, reset streak
        }
        // else same day — streak remains unchanged
      } else {
        state.streak = 1; // first workout
      }

      state.lastWorkoutDate = today;

      // Add entry
      state.entries.push(action.payload);
      saveToLocalStorage(state.entries, state.streak, state.lastWorkoutDate);
    },

    deleteEntry: (state, action) => {
      state.entries = state.entries.filter(entry => entry.id !== action.payload);
      saveToLocalStorage(state.entries, state.streak, state.lastWorkoutDate);
    },
  },
});

export const { addEntry, deleteEntry } = fitnessSlice.actions;

export default fitnessSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const loadFromLocalStorage = () => {
//   const data = localStorage.getItem("fitnessData");
//   return data ? JSON.parse(data) : [];
// };

// export const fitnessSlice = createSlice({
//   name: "fitness",
//   initialState: {
//     entries: loadFromLocalStorage(),
//   },
//   reducers: {
//     addEntry: (state, action) => {
//       if (!state.entries) state.entries = [];
//       state.entries.push(action.payload);
//       localStorage.setItem("fitnessData", JSON.stringify(state.entries));
//     },

//     deleteEntry: (state, action) => {
//       state.entries = state.entries.filter(entry => entry.id !== action.payload);
//       localStorage.setItem("fitnessData", JSON.stringify(state.entries));
//     },
//   },
// });

// export const { addEntry, deleteEntry } = fitnessSlice.actions;

// export default fitnessSlice.reducer;
