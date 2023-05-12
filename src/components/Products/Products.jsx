import React, { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import { ProductContext } from "../../context/ProductContext/ProductState";
import "./Products.scss";
import { useParams, useNavigate } from "react-router-dom";

const Products = () => {
  const {
    products,
    getProducts,
    sort,
  } = useContext(ProductContext);

  const API_URL = "http://localhost:3000/";
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getProducts(id);
  }, []);

  const productsContainer = products.map((product) => {
    return (
      <div
        key={product.id}
        width={200}
        height={250}
        onClick={() => navigate(`/single/${product.id}`)}
        className="productDiv"
      >
        <img
          src={API_URL + "uploaded_imgs/" + product.image}
          height={150}
          width={150}
        />
        <p>{product.name}</p>
        <p>{product.price} €</p>
      </div>
    );
  });

  return (
    <>
      <Header />
      <h1>Main page displaying products</h1>
      <div className="filterContainer row">
        <div className="col">
          <button onClick={() => sort("price", true)}>Lowest price OK</button>
        </div>
        <div className="col">
          <button onClick={() => sort("price", false)}>Highest price OK</button>
        </div>
        <div className="col">
          <button onClick={() => sort("name", true)}>A-Z</button>
        </div>
        <div className="col">
          <button onClick={() => sort("name", false)}>Z-A</button>
        </div>

        <div className="col">
          <span>{products.length} items</span>
        </div>
      </div>
      <div className="picturesContainer">{productsContainer}</div>
    </>
  );
};

export default Products;
