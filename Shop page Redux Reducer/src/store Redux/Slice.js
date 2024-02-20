import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialstate = { ShowCart: false, ShowNotification: null };

const Slice = createSlice({
  name: "Cart",
  initialState: initialstate,
  reducers: {
    ShowCart: (state) => {
      state.ShowCart = !state.ShowCart;
    },
    ShowNotification: (state, action) => {
      state.ShowNotification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

const SliceReducer = Slice.reducer;
export const SliceAction = Slice.actions;

export default SliceReducer;
