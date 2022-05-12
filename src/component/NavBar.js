import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../store/auth/selectors";
import { logout } from "../store/auth/slice";

const NavBar = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingRight: 30,
        paddingLeft: 30,
        backgroundColor: "purple",
      }}
    >
      <Link to="/">
        <h2>Coders!</h2>
      </Link>
      <div style={{ marginTop: 25 }}>
        {user ? (
          <div style={{ display: "flex" }}>
            <h4>Welcome {user.name}!</h4>
            <button onClick={() => dispatch(logout())}>logout</button>
          </div>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
