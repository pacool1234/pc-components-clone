import React, { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import { GlobalContext } from "../../context/GlobalState";
import "./Products.scss"

const Products = () => {
  const { products, getProducts, sortProductsAtoZ, sortProductsZtoA, sortHighestPrice,
    sortLowestPrice } = useContext(GlobalContext);
  const API_URL = "http://localhost:3000/"

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Header />
      <h1>Main page displaying products</h1>
      <div className="filterContainer row">
        <div className="col">
          <button onClick={sortProductsAtoZ}>A-Z</button>
        </div>
        <div className="col">
          <button onClick={sortProductsZtoA}>Z-A</button>
        </div>
        <div className="col">
          <button onClick={sortHighestPrice}>Highest price</button>
        </div>
        <div className="col">
          <button onClick={sortLowestPrice}>Lowest price</button>
        </div>
        <div className="col">
          <span>{products.length} items</span>
        </div>
      </div>
      <div className="picturesContainer">
        {products.map((product) => {
          return (
            <div key={product.id} width={200} height={250}>
              <img src={API_URL + 'uploaded_imgs/' + product.image} height={150} width={150} />
              <p>{product.name}</p>
              <p>{product.price} €</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
