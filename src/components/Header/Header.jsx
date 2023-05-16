import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import { UserContext } from "../../context/UserContext/UserState";
import { ProductContext } from "../../context/ProductContext/ProductState";
import { CategoryContext } from "../../context/CategoryContext/CategoryState";

const Header = () => {
  const { token, user, getUserInfo } = useContext(UserContext);
  const { cart, totalItems } = useContext(ProductContext);
  const { categories, getCategories } = useContext(CategoryContext);

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    getUserInfo();
  }, [cart]);


  const categoriesList = (
    <>
      <li className="dropdownItem" onClick={() => navigate('/products/1')}>
        <span className="material-icons">computer</span>
        <p>PcCom</p>
      </li>
      <li className="dropdownItem" onClick={() => navigate('/products/2')}>
        <span className="material-icons">laptop</span>
        <p>Laptops</p>
      </li>
      <li className="dropdownItem" onClick={() => navigate('/products/3')}>
        <span className="material-icons">phone_iphone</span>
        <p>Smartphones</p>
      </li>
      <li className="dropdownItem" onClick={() => navigate('/products/4')}>
        <span className="material-icons">tablet</span>
        <p>Tablets</p>
      </li>
      <li className="dropdownItem" onClick={() => navigate('/products/5')}>
        <span className="material-icons">connected_tv</span>
        <p>TV</p>
      </li>
      <li className="dropdownItem" onClick={() => navigate('/products/6')}>
        <span className="material-icons">desktop_windows</span>
        <p>Monitors</p>
      </li>
      <li className="dropdownItem" onClick={() => navigate('/products/7')}>
        <span className="material-icons">gamepad</span>
        <p>Gaming</p>
      </li>
      <li className="dropdownItem" onClick={() => navigate('/products/8')}>
        <span className="material-icons">watch</span>
        <p>Smartwatches</p>
      </li>
    </>
  );

  return (
    <div className="myNavbar">
      <nav className="navbar navbar-light bg-light">
        <div className="row" id="navbarContainer">
          <span className="col">
            <Link to="/">
              <img src="../src/images/logo.png" width="129.375" height="45" />
            </Link>
          </span>
          <span className="col">
            {user ? (
              <Link
                to="/profile"
                className="userInfoBlock"
                style={{ textDecoration: "none", color: "gray" }}
              >
                <div className="initialLetterDiv">
                  <p className="initialLetter">{user.name[0]}</p>
                </div>
                {user.email}
              </Link>
            ) : (
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "gray" }}
              >
                <div className="myAccount">
                  <span className="material-icons">account_circle</span>
                  <p>My account</p>
                </div>
              </Link>
            )}
          </span>
          <span className="col">
            <Link to="/cart">
              <span className="material-icons" id="shoppingCartLogo" style={{fontSize:"35px",color:"gray"}}>shopping_cart</span>
              {token && <span className="badge">{totalItems}</span>}
            </Link>
          </span>
        </div>
      </nav>
      <div className="subNavbar">
        <div className="subNavDiv" id="dropdown">
          <div className="menuContainer">
            <div
              className="menuTrigger"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <span className="material-icons">menu</span>
            </div>
          </div>

          {/* <div className="dropdownMenu"> */}
          <div className={`dropdownMenu ${open ? "active" : "inactive"}`}>
            <ul>{categoriesList}</ul>
          </div>
        </div>
        <div className="subNavDiv experts">
          <p>
            <strong>Experts in technology</strong> with a 5 star service
          </p>
        </div>
        <div className="subNavDiv">
          <p>Orange Days 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
