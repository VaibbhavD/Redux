import { createSlice } from "@reduxjs/toolkit";

const CartItemsState = {
  items: [],
  totalQty: 0,
};

const CartSlice = createSlice({
  name: "CartItems",
  initialState: CartItemsState,
  reducers: {
    Replace: (state, action) => {
      state.totalQty = action.payload.totalQty;
      state.items = action.payload.items;
    },
    AddtoItem: (state, action) => {
      const newitem = action.payload;
      const Expitem = state.items.find((Item) => newitem.id === Item.id);
      state.totalQty++;

      if (Expitem) {
        Expitem.Qty++;
        Expitem.total = Expitem.total + newitem.Price;
      } else {
        state.items.push({
          id: newitem.id,
          title: newitem.title,
          Price: newitem.Price,
          total: newitem.Price,
          Qty: 1,
        });
      }
    },
    RemoveItem: (state, action) => {
      const Item = state.items.find((item) => item.id === action.payload.id);
      state.totalQty--;
      if (Item.Qty === 1) {
        state.items = state.items.filter((item) => item.id !== Item.id);
      } else {
        Item.Qty--;
        Item.total = Item.total - Item.Price;
      }
    },
  },
});

export const CartAction = CartSlice.actions;

const CartReducer = CartSlice.reducer;

export default CartReducer;
