import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="row" id="navbarContainer">
          <span className="col">
            <Link to="/"><span className="material-icons">home</span></Link>
          </span>
          <span className="col">
            <Link to="/login">My account</Link>
          </span>
          <span className="col">
            <Link to="/cart"><span className="material-icons">shopping_cart</span></Link>
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
