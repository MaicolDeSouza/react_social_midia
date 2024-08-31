import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Navbar = () => {
  console.log(auth);
  const [user, loading, error] = useAuthState(auth);

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        {!user ? <Link to="/login">Login</Link> :
        <Link to="/createpost">Create post</Link>}
      </div>
      <div className="user">
        {user && (
          <>
            <p>{user?.displayName}</p>
            <img
              src={user?.photoURL || ""}
              width="50"
              height="50"
              alt="profile"
            />
          </>
        )}
      </div>
      {user && <button onClick={logout}>Logout</button>}
    </div>
  );
};

export default Navbar;
