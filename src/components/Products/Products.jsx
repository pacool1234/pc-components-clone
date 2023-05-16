import React, { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ProductContext } from "../../context/ProductContext/ProductState";
import "./Products.scss";
import { useParams, useNavigate } from "react-router-dom";

const Products = () => {
  const {
    products,
    getProducts,
    sort,
    sortBestSeller,
  } = useContext(ProductContext);

  const API_URL = "http://localhost:3000/";
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getProducts(id);
  }, [id]);

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
        <p className="singleProductName">{product.name}</p>
        <div className="priceBlock">
                <div className="discountPriceDiv">
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
    );
  });

  return (
    <>
      <Header />
      <h1>Main page displaying products</h1>
      <div className="filterContainer row">
        <div className="col">
          <button onClick={() => sortBestSeller()}>Best seller</button>
        </div>
        <div className="col">
          <button onClick={() => sort("discountedPrice", true)}>Lowest price</button>
        </div>
        <div className="col">
          <button onClick={() => sort("discountedPrice", false)}>Highest price</button>
        </div>
        <div className="col">
          <button onClick={() => sort("name", true)}>A-Z</button>
        </div>
        <div className="col">
          <button onClick={() => sort("name", false)}>Z-A</button>
        </div>
        <div className="col">
          <span className="itemCounter">{products.length} items</span>
        </div>
      </div>
      <hr style={{"width":"92%", "textAlign":"center", "margin":"0 auto"}}/>
      <div className="productsContainer">{productsContainer}</div>
      <Footer />
    </>
  );
};

export default Products;
