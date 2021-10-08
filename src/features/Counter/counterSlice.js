const { createSlice } = require("@reduxjs/toolkit");

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => {
      return (state += 1);
    },
    decrement: (state) => {
      return (state -= 1);
    },
  },
});

const { actions, reducer } = counterSlice;
export const { increment, decrement } = actions; //name export
export default reducer; //default export
