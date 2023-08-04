import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    products: [],
    total: 0,
    loading: false,
    error: false,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    addProduct: (state, action) => {
      const existingProduct = state.products.find(
        (p) => p._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
      state.total += action.payload.price * action.payload.quantity;
      state.loading = false;
      state.error = false;
    },
    updateProduct: (state, action) => {
      state.products = [...state.products].map((p) => {
        if (p._id !== action.payload._id) {
          return p;
        }
        return {
          ...p,
          quantity: action.payload.quantity,
        };
      });
      state.total = [...state.products]
        .map((p) => p.price * p.quantity)
        .reduce((sum, current) => sum + current, 0);
      state.loading = false;
      state.error = false;
    },
    resetCart: (state) => {
      state.products = [];
      state.total = 0;
      state.loading = false;
      state.error = false;
    },
    resetProduct: (state, action) => {
      state.products = [...state.products].filter(
        (p) => p._id !== action.payload
      );
      state.total = [...state.products]
        .map((p) => p.price * p.quantity)
        .reduce((sum, current) => sum + current, 0);
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  addProduct,
  resetCart,
  updateProduct,
  resetProduct,
} = cartSlice.actions;
export default cartSlice.reducer;
