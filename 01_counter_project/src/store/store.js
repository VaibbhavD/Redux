import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCounterState = { Counter: 0 };

const CounterSlice = createSlice({
  name: "Counter",
  initialState: initialCounterState,
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

const AuthState = { IsAuthenticated: false };

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState: AuthState,
  reducers: {
    Login: (state) => {
      state.IsAuthenticated = true;
    },
    Logout: (state) => {
      state.IsAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { Counter: CounterSlice.reducer, Auth: AuthSlice.reducer },
});

export const CounterActions = CounterSlice.actions;
export const AuthActions = AuthSlice.actions;

export default store;
