import userApi from "api/userApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StorageKey from "constants/storage-keys";

// First, create the thunk
export const register = createAsyncThunk("user/register", async (payload) => {
  //call api register
  const response = await userApi.register(payload);
  //save data local storage
  localStorage.setItem(StorageKey.TOKEN, response.data.jwt);
  localStorage.setItem(StorageKey.USER, JSON.stringify(response.data.user));

  return response.data.user;
});

export const login = createAsyncThunk("user/login", async (payload) => {
  //call api register
  const response = await userApi.login(payload);
  //save data local storage
  localStorage.setItem(StorageKey.TOKEN, response.data.jwt);
  localStorage.setItem(StorageKey.USER, JSON.stringify(response.data.user));

  return response.data.user;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKey.USER)) || {},
    setting: {},
  },
  reducers: {
    logout(state) {
      //clear storage
      localStorage.removeItem(StorageKey.TOKEN);
      localStorage.removeItem(StorageKey.USER);

      state.current = {};
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(register.fulfilled, (state, action) => {
        // Add user to the state array
        state.current = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        // Add user to the state array
        state.current = action.payload;
      });
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer; //default export
