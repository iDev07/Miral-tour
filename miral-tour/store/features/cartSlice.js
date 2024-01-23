import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  quantity: 0,
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state));
      }
      state.items.push(action.payload);
      state.quantity++;
    },
    removeItem(state, action) {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.items.splice(index, 1);
        state.quantity--;
        if (typeof window !== "undefined") {
          localStorage.setItem("cart", JSON.stringify(state));
        }
      }
    },
  },
});

export const { addItem, removeItem } = cart.actions;

export default cart.reducer;
