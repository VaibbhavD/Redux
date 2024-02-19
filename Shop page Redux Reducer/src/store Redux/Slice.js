import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialstate = { ShowCart: false };

const Slice = createSlice({
  name: "Cart",
  initialState: initialstate,
  reducers: {
    ShowCart: (state) => {
      state.ShowCart = !state.ShowCart;
    },
  },
});

const SliceReducer = Slice.reducer;
export const SliceAction = Slice.actions;

export default SliceReducer;
