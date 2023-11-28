import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./components/counter";

export const store = configureStore({
  reducer: {
    cartItem: counterReducer,
  },
});
