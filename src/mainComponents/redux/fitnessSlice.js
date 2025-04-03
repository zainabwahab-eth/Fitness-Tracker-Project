import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  const data = localStorage.getItem("fitnessData");
  return data ? JSON.parse(data) : [];
};

export const fitnessSlice = createSlice({
  name: "fitness",
  initialState: {
    entries: loadFromLocalStorage(),
  },
  reducers: {
    addEntry: (state, action) => {
      if (!state.entries) state.entries = [];
      state.entries.push(action.payload);
      localStorage.setItem("fitnessData", JSON.stringify(state.entries));
    },

    deleteEntry: (state, action) => {
      state.entries = state.entries.filter(entry => entry.id !== action.payload);
      localStorage.setItem("fitnessData", JSON.stringify(state.entries));
    },
  },
});

export const { addEntry, deleteEntry } = fitnessSlice.actions;

export default fitnessSlice.reducer;
