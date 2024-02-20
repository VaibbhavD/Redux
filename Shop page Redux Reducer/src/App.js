import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { Fragment, useEffect } from "react";
import Notification from "./components/UI/Notification";
import { SliceAction } from "./store Redux/Slice";

let Initial = true;

function App() {
  const showcart = useSelector((state) => state.UI.ShowCart);
  const Items = useSelector((state) => state.CartItem.items);
  const ShowNotification = useSelector((state) => state.UI.ShowNotification);
  const dispatch = useDispatch();

  useEffect(() => {
    const FetchData = async () => {
      dispatch(
        SliceAction.ShowNotification({
          status: "Pending",
          title: "Sending",
          message: "Sending To Cart",
        })
      );

      const response = await fetch(
        "https://expense-tracker-7b7e1-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(Items),
        }
      );
      if (!response.ok) {
        throw new Error("Seding Cart Data Failed !");
      }
      dispatch(
        SliceAction.ShowNotification({
          status: "Success",
          title: "Success",
          message: "Sent Cart Data SuccessFully !",
        })
      );
    };
    if (Initial) {
      Initial = false;
      return;
    }

    FetchData().catch((err) => {
      dispatch(
        SliceAction.ShowNotification({
          status: "Error",
          title: "Error",
          message: "Sending Data Failed !",
        })
      );
    });
  }, [Items, dispatch]);

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
