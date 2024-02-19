import { configureStore } from "@reduxjs/toolkit";
import SliceReducer from "./Slice";
import CartReducer from "./CratItemsSlice";

const store = configureStore({
  reducer: { UI: SliceReducer, CartItem: CartReducer },
});

export default store;
