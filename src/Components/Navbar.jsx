import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Navbar() {
    const { isLoggedIn, user } = useContext(AuthContext);
    return (
        <nav>
            <h5>Home</h5>
            {isLoggedIn && (
                <>
                <h5>Search</h5>
                <h5>My Collection</h5>
                </>
            )}
            {!isLoggedIn && (
        <>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/"> <button>Login</button> </Link>
        </>
      )}
        </nav>
)};
export default Navbar;