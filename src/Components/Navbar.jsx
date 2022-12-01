import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import '../App.css';

function Navbar() {
    const {
      isLoggedIn,
      user,
      logOutUser
    } = useContext(AuthContext);
    
    return (
        <nav className="navbar">
            {isLoggedIn && (
                <>
                  <button onClick={logOutUser}>Logout</button>
                  <Link to="/records"> <button>Home</button> </Link>
                  <Link to="/records/upload"> <button>Upload</button> </Link>
                  <span>{user && user.name}</span>
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
