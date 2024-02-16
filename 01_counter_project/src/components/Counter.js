import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.Counter);
  const dispatch = useDispatch();

  const Increment = () => {
    dispatch({ type: "Increment" });
  };

  const Decrement = () => {
    dispatch({ type: "Decrement" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{count}</div>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </main>
  );
};

export default Counter;
