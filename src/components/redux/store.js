import themeReducer from "./themeSlice"; // 👈 import it

const store = configureStore({
  reducer: {
    fitness: fitnessReducer, // already exists
    theme: themeReducer,     // 👈 add this line
  },
});
