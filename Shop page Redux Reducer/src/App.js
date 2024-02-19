import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import CartItem from "./components/Cart/CartItem";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const showcart = useSelector((state) => state.ShowCart);

  return (
    <Layout>
      {showcart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
