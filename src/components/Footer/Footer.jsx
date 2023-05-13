import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="promoBlock">
        <div className="promo">
          <img src="../src/images/truck_delivery.png" />
          <div className="promoTextDiv">
            <span>
              <strong>Free shipping</strong> on orders over €50
            </span>
          </div>
        </div>
        <div className="promo promoMiddle">
          <img src="../src/images/hold.png" />
          <div className="promoTextDiv">
            <span>
              Receive your order in <strong>24h</strong>
            </span>
          </div>
        </div>
        <div className="promo">
          <img src="../src/images/refresh.png" />
          <div className="promoTextDiv">
            <span>
              <strong>Free returns</strong> and 24-hour replacement guarantee
            </span>
          </div>
        </div>
      </div>
      <div className="infoBlock">
        <h1>Info Block</h1>
      </div>
      <div className="copyright">
        <p>
          PC Components LLC TIN 275-234-098. 1600 Pennsylvania Avenue, NW
          Washington, D.C. 20500 U.S.
        </p>
      </div>
    </>
  );
};

export default Footer;
