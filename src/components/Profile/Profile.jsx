import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Profile.scss"

const Profile = () => {
  const { getUserInfo, getOrders, orders, user, token, logout } =
    useContext(UserContext);
  const navigate = useNavigate();

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

  return (
    <>
      <Header />
      <main className="profileContainer">
        <section className="userInfoSection">
          <h1>User Profile</h1>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.role}</p>
          <p>{user.address}</p>
        </section>
        <section className="ordersHistory">
          {orders.map((order) => {
            return (
              <>
                <div key={order.id}>
                  {order.Products.map((product) => {
                    return (
                      <div key={product.id}>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                      </div>
                    );
                  })}
                </div>
                <hr />
              </>
            );
          })}
        </section>
      </main>


      <span>
        <button onClick={logout} className="btn btn-danger">
          Log out
        </button>
      </span>
      <Footer />
    </>
  );
};

export default Profile;
