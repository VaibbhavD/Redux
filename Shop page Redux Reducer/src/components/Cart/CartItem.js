import classes from "./CartItem.module.css";
import { CartAction } from "../../store Redux/CratItemsSlice";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const { title, Qty, total, Price, id } = props.item;
  const dispatch = useDispatch();

  const AddQty = () => {
    dispatch(CartAction.AddtoItem(props.item));
  };
  const RemoveQty = () => {
    dispatch(CartAction.RemoveItem(props.item));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.Price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${Price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.Qty}>
          x <span>{Qty}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={RemoveQty}>-</button>
          <button onClick={AddQty}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
