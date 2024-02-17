import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { CounterActions } from "../store/store";

const Counter = () => {
  const count = useSelector((state) => state.Counter.Counter);
  const dispatch = useDispatch();

  const Increment = () => {
    dispatch(CounterActions.Increment());
  };
  const IncrementBy5 = () => {
    dispatch(CounterActions.IncrementBy5(5));
  };

  const Decrement = () => {
    dispatch(CounterActions.Decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{count}</div>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={IncrementBy5}>IncrementBy5</button>
    </main>
  );
};

export default Counter;
