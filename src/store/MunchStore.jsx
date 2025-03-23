import { configureStore } from "@reduxjs/toolkit";
import { ItemSlice } from "./ItemSlice";
import { ItemBagSlice } from "./ItemBag";
import { OrderSlice } from "./orderSlice";
import { FetchStatusSlice } from "./FetchStatusSlice";

export const MunchStore = configureStore({
  reducer: {
    FoodMunch: ItemSlice.reducer,
    Bag: ItemBagSlice.reducer,
    Order: OrderSlice.reducer,
    fetchstatus: FetchStatusSlice.reducer,
  },
});
