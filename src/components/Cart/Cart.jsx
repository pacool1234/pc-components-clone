import { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Cart.scss";
import { UserContext } from "../../context/UserContext/UserState";
import { ProductContext } from "../../context/ProductContext/ProductState";
import { OrderContext } from "../../context/OrderContext/OrderState";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { token, user, getUserInfo } = useContext(UserContext);
  const { createOrder } = useContext(OrderContext);
  const {
    cart,
    addItem,
    subtractItem,
    deleteItem,
    clearCart,
    totalItems,
    totalPrice,
  } = useContext(ProductContext);

  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();
  const API_URL = "http://localhost:3000/";

  useEffect(() => {
    getUserInfo();
  }, [])

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  if (!user) {
    return "loading";
  }

  const itemsDiv = cart.map((product) => {
    return (
      <div key={product.id} width={200} height={250} className="itemDiv">
        <div className="leftItemSubDiv">
          <img
            src={API_URL + "uploaded_imgs/" + product.image}
            height={100}
            width={100}
          />
          <p>{product.name}</p>
          <div className="priceBlock">
            <div className="dicountPriceDiv">
              <p className="discountProductPrice">
                {(product.price * (1 - product.discount / 100)).toFixed(2)} €
              </p>
            </div>
            {product.discount !== 0 && (
              <>
                <div className="originalPriceDiv">
                  <p className="pvp">PVP</p>
                  <p className="originalProductPrice">{product.price} €</p>
                </div>
                <div className="discountDiv">
                  <p className="discountTitle">DISCOUNT</p>
                  <p className="discount">-{product.discount}%</p>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="rightItemSubDiv">
          <div className="eraser" onClick={() => deleteItem(product)}>
            <span className="material-icons trashCan eraserButton">delete</span>
          </div>
          <div className="controller">
            <div
              className="controllerButton control"
              onClick={() => subtractItem(product)}
            >
              -
            </div>
            <div className="controllerButton middleOne">{product.amount}</div>
            <div
              className="controllerButton control"
              onClick={() => addItem(product)}
            >
              +
            </div>
          </div>
        </div>
      </div>
    );
  });

  const handleOrder = () => {
    createOrder(cart);
    setShowToast(true);
    setTimeout(() => {
      clearCart();
      navigate("/profile");
    }, 1500);
  };

  if (!cart) {
    return <h3>Nothing</h3>;
  }

  return (
    <div className="cartBody">
      <Header />
      <>
        {cart.length !== 0 ? (
          <>
            <div className="itemsHeaderDiv">
              <h2>My Cart</h2>
              <p>{totalItems} items</p>
            </div>
            <div className="itemContainer">
              <div className="itemsDiv">{itemsDiv}</div>
              <div className="totalDiv">
                <h1>Total</h1>
                <p>{totalPrice.toFixed(2)} €</p>
                <button onClick={() => handleOrder()}>Order</button>
              </div>
            </div>
            <button onClick={() => clearCart()}>Clear cart</button>
          </>
        ) : (
          <div className="emptyCart">
            <img src="../src/images/lens.svg" />
            <h3>Your cart is empty</h3>
            <p>
              Explore a multitude of items at great prices from our home page
            </p>
          </div>
        )}
      </>
      <div
        className={`toast position-fixed top-0 end-0 m-3 ${
          showToast ? "show" : ""
        }`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-body">Your order has been processed</div>
      </div>
      <div className="copyright">
        <p>
          PC Components LLC TIN 275-234-098. 1600 Pennsylvania Avenue, NW
          Washington, D.C. 20500 U.S.
        </p>
      </div>
      <div className="blankDiv"></div>
    </div>
  );
};

export default Cart;
