import { createSlice } from "@reduxjs/toolkit";

export const OrderSlice = createSlice({
  name: "Order",
  initialState: {
    isOrderPlaced: false,
  },
  reducers: {
    SetOrderPlaced: (state, action) => {
      state.isOrderPlaced = action.payload;
    },
  },
});

export const { SetOrderPlaced } = OrderSlice.actions;
