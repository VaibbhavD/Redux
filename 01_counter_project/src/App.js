import Counter from "./components/Counter";
import Auth from "./components/Auth";
import { Fragment } from "react";
import Header from "./components/Header";
import { AuthActions } from "./store/store";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";

function App() {
  const isLoggedin = useSelector((state) => state.Auth.IsAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isLoggedin && <Auth />}
      {isLoggedin && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
