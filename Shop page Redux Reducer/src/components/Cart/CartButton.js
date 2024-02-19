import classes from "./CartButton.module.css";
import { SliceAction } from "../../store Redux/Slice";
import { useDispatch } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const showcartHandler = () => {
    dispatch(SliceAction.ShowCart());
  };

  return (
    <button className={classes.button} onClick={showcartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
