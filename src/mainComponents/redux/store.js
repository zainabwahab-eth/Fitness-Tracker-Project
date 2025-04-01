import { configureStore } from "@reduxjs/toolkit";
import fitnessReducer from "./fitnessSlice";

export default configureStore({
    reducer: {
        fitness: fitnessReducer
    }
})