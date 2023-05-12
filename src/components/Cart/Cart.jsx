import Reac, { useContext, useEffect } from "react";
import Header from "../Header/Header";
import "./Cart.scss";
import { UserContext } from "../../context/UserContext/UserState";
import { ProductContext } from "../../context/ProductContext/ProductState";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { token } = useContext(UserContext);
  const { cart } = useContext(ProductContext);
  const navigate = useNavigate();
  const API_URL = "http://localhost:3000/";

  // const
  const productsDiv = cart.map((product) => {
    return (
      <div
        key={product.id}
        width={200}
        height={250}
        className="productDiv"
      >
        <img
          src={API_URL + "uploaded_imgs/" + product.image}
          height={150}
          width={150}
        />
        <p>{product.name}</p>
        <p>{product.price} €</p>
        <p>{product.amount} times</p>
      </div>
    );
  });

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  if (!cart) {
    return <h3>Nothing</h3>;
  }

  return (
    <>
      <Header />
      <div className="mainCartDiv">
        {cart ? (
          <div className="products">{productsDiv}</div>
        ) : (
          <>
            <img src="../src/images/lens.svg" alt="" />
            <h3>Your cart is empty</h3>
            <p>
              Explore a multitude of items at great prices from our home page
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
