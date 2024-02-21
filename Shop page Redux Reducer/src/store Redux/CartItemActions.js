import { SliceAction } from "./Slice";
import { CartAction } from "./CratItemsSlice";

export const SendCartData = (Items) => {
  return async (dispatch) => {
    dispatch(
      SliceAction.ShowNotification({
        status: "Pending",
        title: "Sending",
        message: "Sending To Cart",
      })
    );

    const FetchData = async () => {
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
    };

    try {
      await FetchData();

      dispatch(
        SliceAction.ShowNotification({
          status: "Success",
          title: "Success",
          message: "Sent Cart Data SuccessFully !",
        })
      );
    } catch (error) {
      dispatch(
        SliceAction.ShowNotification({
          status: "Error",
          title: "Error",
          message: "Sending Data Failed !",
        })
      );
    }
  };
};

export const GetData = () => {
  return async (dispatch) => {
    const FetchData = async () => {
      const response = await fetch(
        "https://expense-tracker-7b7e1-default-rtdb.firebaseio.com/cart.json"
      );
      const data = await response.json();
      return data;
    };

    try {
      const data = await FetchData();
      dispatch(CartAction.Replace(data));
    } catch (error) {
      dispatch(
        SliceAction.ShowNotification({
          status: "Error",
          title: "Error",
          message: "Sending Data Failed !",
        })
      );
    }
  };
};
