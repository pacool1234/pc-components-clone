import React, { useContext, useEffect } from "react";
import Header from "../Header/Header";
import { CategoryContext } from "../../context/CategoryContext/CategoryState";
import { useNavigate } from "react-router-dom";
import "./Home.scss"

const Home = () => {
  const { categories, getCategories } = useContext(CategoryContext);
  const API_URL = "http://localhost:3000/";
  const navigate = useNavigate();

  const categoriesDiv = categories.map((category) => {
    return (
      <div key={category.id} className="categoryImg" onClick={() => navigate(`/products/${category.id}`)}>
        <img
          src={API_URL + "uploaded_imgs/" + category.image}
          height={150}
          width={150}
        />
      </div>
    );
  });

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <Header />
      <h1>Home page</h1>
      <div className="categories">{categoriesDiv}</div>
    </>
  );
};

export default Home;
