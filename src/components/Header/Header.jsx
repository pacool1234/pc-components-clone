import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { UserContext } from "../../context/UserContext/UserState";
import { ProductContext } from "../../context/ProductContext/ProductState";

const Header = () => {
  const { token, user, getUserInfo } = useContext(UserContext);
  const { cart, totalItems } = useContext(ProductContext);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    getUserInfo();
  }, [cart]);

  return (
    <>
      <nav className="navbar navbar-light bg-light myNavbar">
        <div className="row" id="navbarContainer">
          <span className="col">
            <Link to="/">
              <img src="../src/images/logo.png" width="69" height="24" />
            </Link>
          </span>
          <span className="col">
            {user ? (
                <Link to="/profile" className="userInfoBlock" style={{textDecoration: "none", color:"gray"}}>
                  <div className="initialLetterDiv">
                    <p className="initialLetter">{user.name[0]}</p>
                  </div>
                  {user.email}
                </Link>
            ) : (
              <Link to="/login" style={{textDecoration: "none", color:"gray"}}>My account</Link>
            )}
          </span>
          <span className="col">
            <Link to="/cart">
              <span className="material-icons">shopping_cart</span>
              {/* {token && <span className="badge">{cart.length}</span>} */}
              {token && <span className="badge">{totalItems}</span>}
            </Link>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Header;
