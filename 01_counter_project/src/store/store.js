import { createStore } from "redux";

const Count = (state = { Counter: 0 }, action) => {
  if (action.type === "Increment") {
    return { Counter: state.Counter + 5 };
  }
  if (action.type === "Decrement") {
    return { Counter: state.Counter - 5 };
  }
  return state;
};

const store = createStore(Count);

export default store;
