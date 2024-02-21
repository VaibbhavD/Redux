import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { Fragment, useEffect } from "react";
import Notification from "./components/UI/Notification";
import { SendCartData } from "./store Redux/CartItemActions";
import { GetData } from "./store Redux/CartItemActions";

let Initial = true;

function App() {
  const showcart = useSelector((state) => state.UI.ShowCart);
  const Items = useSelector((state) => state.CartItem);
  const ShowNotification = useSelector((state) => state.UI.ShowNotification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetData());
  }, [dispatch]);

  useEffect(() => {
    if (Initial) {
      Initial = false;
      return;
    }

    dispatch(SendCartData(Items));
  }, [Items]);

  return (
    <Fragment>
      {ShowNotification && (
        <Notification
          status={ShowNotification.status}
          title={ShowNotification.title}
          massage={ShowNotification.message}
        />
      )}
      <Layout>
        {showcart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
