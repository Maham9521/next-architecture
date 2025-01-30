// core/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./slices";

const store = configureStore({
  reducer: {
    theme: themeReducer, // Add other reducers here when you have more slices
  },
});

export default store;
