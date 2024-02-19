import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const Items = useSelector((state) => state.CartItem.items);
  console.log(Items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {Items.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: "item.title",
              Qty: item.Qty,
              Price: item.Price,
              total: item.total,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
