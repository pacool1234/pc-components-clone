import React, { useContext, useEffect } from "react";
import Header from "../Header/Header";
import { ProductContext } from "../../context/ProductContext/ProductState";
import "./Singleproduct.scss";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { products, getSingleProduct, addCart, cart } = useContext(ProductContext);
  const API_URL = "http://localhost:3000/";
  const { id } = useParams();
  let productsToShow = []

  useEffect(() => {
    getSingleProduct(id);
  }, []);
  
  // DEBUG
  useEffect(() => {
  }, [cart]);

  const productsContainer = products.map((product) => {
    return (
      <div key={product.id}>
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
              <div className="purchaseBlock">
                <button onClick={() => addCart(product)}>Add to Cart</button>
              </div>
            </div>
          </section>
        </main>
      </div>
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
