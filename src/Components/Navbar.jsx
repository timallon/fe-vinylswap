import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Navbar() {
    const {
      isLoggedIn,
      user,
      logOutUser
    } = useContext(AuthContext);
    
    return (
        <nav>
            <h5>Home</h5>
            {isLoggedIn && (
                <>
                  <h5>Search</h5>
                  <h5>My Collection</h5>
                  <button onClick={logOutUser}>Logout</button>
                  <span>{user && user.name}</span>
                </>
            )}
            {!isLoggedIn && (
        <>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/"> <button>Login</button> </Link>
          <Link to="/records/browse"> <button>Browse</button> </Link>
          <Link to="/records/upload"> <button>Upload</button> </Link>
          <Link to="/records/collection"> <button>My Collection</button> </Link>
        </>
      )}
        </nav>
)};
export default Navbar;
