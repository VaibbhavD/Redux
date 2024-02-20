import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { CartAction } from "../../store Redux/CratItemsSlice";
import { useDispatch } from "react-redux";
import { SliceAction } from "../../store Redux/Slice";

const ProductItem = (props) => {
  const { title, Price, Description, id } = props;
  const dispatch = useDispatch();

  const AddItem = () => {
    dispatch(
      CartAction.AddtoItem({
        id,
        title,
        Price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.Price}>${Price.toFixed(2)}</div>
        </header>
        <p>{Description}</p>
        <div className={classes.actions}>
          <button onClick={AddItem}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
