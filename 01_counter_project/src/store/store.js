import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { Counter: 0 };

const CounterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    Increment: (state) => {
      state.Counter++;
    },
    Decrement: (state) => {
      state.Counter--;
    },
    IncrementBy5: (state, action) => {
      state.Counter = state.Counter + action.payload;
    },
  },
});

const store = configureStore({
  reducer: CounterSlice.reducer,
});

export const CounterActions = CounterSlice.actions;

export default store;
