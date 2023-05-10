import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
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
            <Link to="/login">My account</Link>
          </span>
          <span className="col">
            <Link to="/cart">
              <span className="material-icons">shopping_cart</span>
            </Link>
          </span>
          <span className="col">
            <button>Log out</button>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Header;
