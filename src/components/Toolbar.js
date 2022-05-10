import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfile } from "../store/auth/selectors";
import { logout } from "../store/auth/slice";
import "./styles.css";

const Toolbar = () => {
  const user = useSelector(getUserProfile);
  const dispatch = useDispatch();

  return (
    <div className="toolbar">
      <Link to="/" className="logo-link">
        <h2>Codaisseur Coders Network!</h2>
      </Link>
      <div className="button-container">
        {user ? (
          <>
            <h4 className="welcome-text">Welcome {user.name}</h4>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Toolbar;
