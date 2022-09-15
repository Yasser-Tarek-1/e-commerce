import { createSlice } from "@reduxjs/toolkit";

const initialState = { cart: [], total: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    adToCart(state, action) {
      state.cart = [...state.cart, action.payload];
    },
    updateCart(state, action) {
      state.cart = state.cart.filter((item) => {
        return item.id === action.payload.id
          ? (item.count = action.payload.count)
          : item;
      });
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
    checkOut(state, action) {
      state.total = action.payload;
      state.cart = [];
    },
  },
});

export const { adToCart, updateCart, deleteItem, checkOut } = cartSlice.actions;

export default cartSlice.reducer;
