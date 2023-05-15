import React, { useContext, useEffect } from "react";
import Header from "../Header/Header";
import { CategoryContext } from "../../context/CategoryContext/CategoryState";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import Footer from "../Footer/Footer";
import { UserContext } from "../../context/UserContext/UserState";

const Home = () => {
  const { categories, getCategories } = useContext(CategoryContext);
  const API_URL = "http://localhost:3000/";
  const navigate = useNavigate();

  useEffect(() => {
    getCategories();
  }, [])

  setTimeout(() => {
    console.log("waiting");
  }, 1000);

  const categoriesDiv = categories.map((category) => {
    return (
      <div
        key={category.id}
        className="imgDiv"
        onClick={() => navigate(`/products/${category.id}`)}
      >
        <img
          src={API_URL + "uploaded_imgs/" + category.image}
          className="catImg"
          // height={150}
          // width={150}
        />
      </div>
    );
  });

  return (
    <>
      <Header />
      <div className="orange">
        <img src="../src/images/orange_days.png" className="orangeImg"/>
        <div className="categories">{categoriesDiv}</div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
