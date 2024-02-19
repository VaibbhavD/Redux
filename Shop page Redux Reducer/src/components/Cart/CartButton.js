import classes from "./CartButton.module.css";
import { SliceAction } from "../../store Redux/Slice";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const Quantity = useSelector((state) => state.CartItem.totalQty);

  const showcartHandler = () => {
    dispatch(SliceAction.ShowCart());
  };

  return (
    <button className={classes.button} onClick={showcartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{Quantity}</span>
    </button>
  );
};

export default CartButton;
