import { configureStore } from "@reduxjs/toolkit";
import userReducer from "features/Auth/userSlice";
import countReducer from "../features/Counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: countReducer,
    user: userReducer,
  },
});

export default store;
