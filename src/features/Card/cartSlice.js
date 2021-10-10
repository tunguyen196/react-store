import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    showMiniCart: false,
    cartItems: [],
  },
  reducers: {
    showMiniCard(state) {
      state.showMiniCart = true;
    },

    hideMiniCard(state) {
      state.showMiniCart = false;
    },
  },
});

const { actions, reducer } = cardSlice;

export const { showMiniCard, hideMiniCard } = actions;

export default reducer;
