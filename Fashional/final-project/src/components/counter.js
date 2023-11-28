import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.value.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const index = state.value.findIndex(function (element) {
        return element.id === action.payload;
      });

      console.log(index);
      state.value.splice(index, 1);
    },
  },
});

export const { addToCart, removeFromCart } = counterSlice.actions;

export default counterSlice.reducer;
