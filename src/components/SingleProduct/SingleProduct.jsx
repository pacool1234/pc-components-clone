import React, { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import { ProductContext } from "../../context/ProductContext/ProductState";
import "./Singleproduct.scss";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { products, getSingleProduct } = useContext(ProductContext);
  const API_URL = "http://localhost:3000/";

  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(id);
  }, []);

  const productsContainer = products.map((product) => {
    return (
      <>
        <main className="mainProduct">
          <section className="imgSection">
            <div className="singleImgDiv">
              <img
                src={API_URL + "uploaded_imgs/" + product.image}
                className="singleImg"
              />
            </div>
          </section>
          <section className="infoSection">
            <div className="productData">
              <div className="productHeader">
                <h6 className="singleProductName">{product.name}</h6>
              </div>
              <div className="priceBlock">
                <div className="priceDiv">
                  <p className="productPrice">{product.price} €</p>
                </div>
                <div className="discountDiv">
                  <p className="productPrice">{product.price} €</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  });

  return (
    <>
      <Header />
      <h1>Main page displaying products</h1>
      <div className="picturesContainer">{productsContainer}</div>
    </>
  );
};

export default SingleProduct;
