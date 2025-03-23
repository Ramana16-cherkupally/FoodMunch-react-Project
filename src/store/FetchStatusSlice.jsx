import { createSlice } from "@reduxjs/toolkit";

export const FetchStatusSlice = createSlice({
  name: "fetchstatus",
  initialState: {
    fetchDone: false, // false: pending, true: done
    currentFetching: false,
  },
  reducers: {
    FetchmarkDone: (state) => {
      state.fetchDone = true; //     return (state.fetchDone = true);
      //  ❌ This both mutates state and returns a value — causing Immer to throw the error.
    },
    FetchingStarted: (state) => {
      state.currentFetching = true;
    },
    FetchingFinished: (state) => {
      state.currentFetching = false;
    },
  },
});

export const FetchStatusActions = FetchStatusSlice.actions;
