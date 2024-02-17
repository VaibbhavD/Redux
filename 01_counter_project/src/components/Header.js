import classes from "./Header.module.css";
import { AuthActions } from "../store/store";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const isLoggedin = useSelector((state) => state.Auth.IsAuthenticated);
  const dispatch = useDispatch();

  const LogoutHandler = () => {
    dispatch(AuthActions.Logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isLoggedin && (
          <ul>
            <li>
              <a>My Products</a>
            </li>
            <li>
              <a>My Sales</a>
            </li>
            <li>
              <button onClick={LogoutHandler}>Logout</button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
