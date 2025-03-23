import { createSlice } from "@reduxjs/toolkit";

export const ItemSlice = createSlice({
  name: "FoodMunch",
  initialState: { items: [] }, // ✅ Correct structure
  reducers: {
    addInitialItems: (state, action) => {
      state.items = action.payload; // ✅ Now state.items works as intended
    },
  },
});

export const ItemsActions = ItemSlice.actions;
