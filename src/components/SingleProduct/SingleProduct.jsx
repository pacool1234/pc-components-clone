import React, { useContext, useEffect } from "react";
import Header from "../Header/Header";
import { ProductContext } from "../../context/ProductContext/ProductState";
import "./Singleproduct.scss";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";

const SingleProduct = () => {
  const { products, getSingleProduct, addItem } = useContext(ProductContext);
  const API_URL = "http://localhost:3000/";
  const { id } = useParams();

  const toUserID = (id) => {
    let stringID = String(id);
    stringID = "00000" + stringID;
    stringID = stringID.substring(stringID.length - 6);
    stringID = "#" + stringID;
    return stringID;
  };

  const numberOfStars = (num) => {
    num = num > 5 ? 5 : num;
    return (
      <>
      {Array.from({ length: num }, (_, index) => (
        <span className="material-icons" style={{color:"orange"}}>star</span>
      ))}
      {Array.from({ length: 5 - num }, (_, index) => (
        <span className="material-icons" style={{color:"gray"}}>star</span>
      ))}
      </>
    )
  }

  useEffect(() => {
    getSingleProduct(id);
  }, []);

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
                <h6 id="singleProductName">{product.name}</h6>
              </div>
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
              <div className="purchaseBlock">
                <button className="addToCartButton" onClick={() => addItem(product)}>Add to Cart</button>
              </div>
            </div>
          </section>
        </main>
        <hr style={{ width: "90%", textAlign: "center", margin: "0 auto" }}/>
        <div className="reviewsBlock">
          <h3 className="reviewsTitle">Reviews</h3>
          {product.Reviews.map(review => {
            return (
              <div className="singleReview" key={review.id}>
                <div className="reviewHeader">
                  <p> User ID: {toUserID(review.UserId)}</p>
                  <p>{review.createdAt.slice(0,10)}</p>
                </div>
                  <p>{numberOfStars(review.stars)}</p>
                <div className="reviewContent">
                  <p><strong>{review.title}</strong></p>
                  <p>&ldquo;{review.content}&rdquo;</p>
                </div>
                <hr style={{ width: "90%", textAlign: "center", margin: "0 auto" }}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  });

  return (
    <>
      <Header />
      <h1>Main page displaying products</h1>
      <div className="picturesContainer">{productsContainer}</div>
      <Footer />
    </>
  );
};

export default SingleProduct;
