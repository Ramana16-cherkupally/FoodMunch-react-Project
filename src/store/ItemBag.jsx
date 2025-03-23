import { createSlice } from "@reduxjs/toolkit";
// import { DEFAULT_ITEMS } from "./Items";

export const ItemBagSlice = createSlice({
  name: "Bag",
  initialState: [],
  reducers: {
    AddToBag: (state, action) => {
      state.push(action.payload);
    },
    RemoveFromBag: (state, action) => {
      return state.filter((ItemId) => ItemId !== action.payload);
    },
  },
});
export const BagActions = ItemBagSlice.actions;
