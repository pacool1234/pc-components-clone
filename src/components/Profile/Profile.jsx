import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Profile.scss";

const Profile = () => {
  const { getUserInfo, getOrders, orders, user, token, logout } =
    useContext(UserContext);
  const navigate = useNavigate();

  const API_URL = "http://localhost:3000/";

  useEffect(() => {
    getUserInfo();
    getOrders();
  }, []);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  if (!user) {
    return "loading";
  }

  const allOrders = orders.map((order) => {
    return (
      <div className="singleOrder">
        <div className="orderHeader">
          <div className="orderSubHeader">
            <div className="subHeaderTitle">
              Ordered
            </div>
            <div className="subHeaderValue">
              {new Date(order.createdAt).toISOString().split('T')[0]}
            </div>
          </div>
          <div className="orderSubHeader">
            <div className="subHeaderTitle ">
              Seller
            </div>
            <div className="subHeaderValue">
              PC Components
            </div>
          </div>
          <div className="orderSubHeader">
            <div className="subHeaderTitle">
              Order #
            </div>
            <div className="subHeaderValue">
              {order.id}
            </div>
          </div>
        </div>
        <hr style={{"width":"97%", "textAlign":"center", "margin":"0 auto"}}/>
        {order.Products.map((product) => {
          return (
            <>
            <div key={product.id} width={200} height={250} className="purchasedItemDiv">
              <div className="leftPurchasedItemSubDiv">
                <img
                  src={API_URL + "uploaded_imgs/" + product.image}
                  height={100}
                  width={100}
                />
              </div>
              <div className="rightPurchasedItemSubDiv">
                <p id="productName">{product.name}</p>
                <div className="priceBlock">
                  <div className="dicountPriceDiv">
                    <p className="discountProductPrice">
                      {(product.price * (1 - product.discount / 100)).toFixed(
                        2
                      )}{" "}
                      €
                    </p>
                  </div>
                  {product.discount !== 0 && (
                    <>
                      <div className="originalPriceDiv">
                        <p className="pvp">PVP</p>
                        <p className="originalProductPrice">
                          {product.price} €
                        </p>
                      </div>
                      <div className="discountDiv">
                        <p className="discountTitle">DISCOUNT</p>
                        <p className="discount">-{product.discount}%</p>
                      </div>
                    </>
                  )}
                </div>
                <div className="amountPurchasedDiv">
                  <p>{product.amount} unit(s)</p>
                </div>
              </div>
              <div className="starsItemSubDiv">
                <p>STARS</p>
              </div>
            </div>
          <hr style={{"width":"90%", "textAlign":"center", "margin":"0 auto"}}/>
          </>
          );
        })}
      </div>
    );
  });

  return (
    <>
      <Header />
      <div className="ordersHistoryTitle">
        <h2 id="blank" style={{color:"white"}}>.</h2>
        <h2>Orders History</h2>
      </div>
      <main className="profileContainer">
        <section className="userInfoSection">
          <h3>{user.name} {user.surname}</h3>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.role}</p>
          <p>{user.address}</p>
          <hr style={{"width":"90%", "textAlign":"center", "margin":"5% auto"}} />
          <span>
            <button onClick={logout} className="btn btn-danger">
              Log out
            </button>
          </span>
        </section>
        <section className="ordersHistory">
          {/* <div className="ordersHistoryTitle">
            <h2>Orders History</h2>
          </div> */}
          {allOrders}
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Profile;
