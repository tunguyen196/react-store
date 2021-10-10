import { configureStore } from "@reduxjs/toolkit";
import userReducer from "features/Auth/userSlice";
import cardReducer from "features/Card";

export const store = configureStore({
  reducer: {
    user: userReducer,
    card: cardReducer,
  },
});

export default store;
