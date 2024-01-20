import { configureStore } from "@reduxjs/toolkit";
import fitnessSlicer from "./fitnessSlicer";

export const store = configureStore({
  reducer: fitnessSlicer,
});
