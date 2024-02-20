import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";
import { SliceAction } from "./store Redux/Slice";

function App() {
  const showcart = useSelector((state) => state.UI.ShowCart);
  const Items = useSelector((state) => state.CartItem.items);
  const ShoeNotification = useSelector((state) => state.UI.ShoeNotification);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      "https://expense-tracker-7b7e1-default-rtdb.firebaseio.com/cart.json",
      {
        method: "PUT",
        body: JSON.stringify(Items),
      }
    );
  }, [Items]);

  return (
    <Layout>
      {ShoeNotification && <Notification />}
      {showcart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
