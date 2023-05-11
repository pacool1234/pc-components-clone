import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { UserContext } from "../../context/UserContext/UserState";

const Header = () => {
  const { token, logout } = useContext(UserContext)
  return (
    <>
      <nav className="navbar navbar-light bg-light myNavbar">
        <div className="row" id="navbarContainer">
          <span className="col">
            <Link to="/">
              <img
                src="../src/images/logo.png" 
                width="69"
                height="24"
              />
            </Link>
          </span>
          <span className="col">
            {token ? <Link to="/profile">My account</Link> : <Link to="/login">My account</Link> }
          </span>
          <span className="col">
            <Link to="/cart">
              <span className="material-icons">shopping_cart</span>
            </Link>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Header;
