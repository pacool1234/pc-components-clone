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
        <div className="infoTitle">
          <p className="infoHeader">Why buy</p>
          <p className="infoli">How to buy</p>
          <p className="infoli">Payment methods</p>
          <p className="infoli">Shipping fees</p>
          <p className="infoli">Discount coupons</p>
          <p className="infoli">FAQs</p>
          <p className="infoli">Customer options</p>
        </div>
        <div className="infoTitle">
          <p className="infoHeader">About us</p>
          <p className="infoli">About us</p>
          <p className="infoli">Our commitment</p>
          <p className="infoli">Our stores</p>
          <p className="infoli">Our brands</p>
          <p className="infoli">Affiliates</p>
          <p className="infoli">Terms and conditions</p>
          <p className="infoli">Privacy</p>
        </div>
        <div className="infoTitle">
          <p className="infoHeader">Contact us</p>
          <p className="infoli">Customer service</p>
          <p className="infoli">Contact us</p>
          <p className="infoli">Return policy</p>
          <p className="infoli">Advertisement</p>
          <p className="infoli">Careers</p>
          <p className="infoli">Cookies policy</p>
          <p className="infoli">Partnership</p>
        </div>
        <div className="infoTitle">
          <p className="infoHeader">Other</p>
          <p className="infoli">Replay</p>
          <p className="infoli">Black Friday</p>
          <p className="infoli">Cyber Monday</p>
          <p className="infoli">PcDays</p>
          <p className="infoli">Marketplace</p>
          <p className="infoli">Warranty service</p>
          <p className="infoli">Social responsibility</p>
        </div>
        <div className="infoTitle communityTitle">
          <p className="infoHeader">Community</p>
          <div className="communityli">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 27 27"
              enable-background="new 0 0 30 30"
              fill="inherit"
              data-testid="link-icon"
              class="sc-jrAFXE dqugkO"
            >
              <path d="M21.974 5.811v12.232c.151 3.264-4.177 5.352-7.211 5.864-2.098.36-4.083-.399-5.33-1.044L.68 18.29c-.226-.151-.68-.417-.68-1.347V4.483c0-1.689 1.701-.598 2.987-.104l6.606 2.77c1.531.665 3.761 1.538 5.529 1.367 3.856-.351 6.852-2.705 6.852-2.705z"></path>
              <path d="M13.81 6.048c1.283.31 3.142-.311 4.816-1.448.474-.282.436-.981-.726-1.487C15.912 2.25 12.529.772 12.529.772 11.04.12 9.71-.676 9.71.995v3.42s3.263 1.429 4.1 1.633z"></path>
            </svg>
            <span>Blog</span>
          </div>
          <div className="communityli">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 27 27"
              enable-background="new 0 0 24 24"
              fill="inherit"
              data-testid="link-icon"
              class="sc-jrAFXE dqugkO"
            >
              <path
                d="M16.5,2h-9C4.5,2,2,4.5,2,7.5v9c0,3,2.5,5.5,5.5,5.5h9c3,0,5.5-2.5,5.5-5.5v-9C22,4.5,19.5,2,16.5,2z M20.2,16.5
c0,2.1-1.7,3.7-3.7,3.7h-9c-2.1,0-3.7-1.7-3.7-3.7v-9c0-2.1,1.7-3.7,3.7-3.7h9c2.1,0,3.7,1.7,3.7,3.7V16.5L20.2,16.5z"
              ></path>
              <path
                d="M12,6.8c-2.8,0-5.2,2.3-5.2,5.2c0,2.8,2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2C17.2,9.2,14.8,6.8,12,6.8z M12,15.4
c-1.9,0-3.4-1.5-3.4-3.4s1.5-3.4,3.4-3.4s3.4,1.5,3.4,3.4S13.9,15.4,12,15.4z"
              ></path>
              <circle cx="17.4" cy="6.6" r="1.3"></circle>
            </svg>
            <span>Instagram</span>
          </div>
          <div className="communityli">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              enable-background="new 0 0 24 24"
              fill="inherit"
              data-testid="link-icon"
              class="sc-jrAFXE dqugkO"
            >
              <path
                d="M8.3,20.1c7.5,0,11.7-6.3,11.7-11.7c0-0.2,0-0.4,0-0.5c0.8-0.6,1.5-1.3,2-2.1c-0.7,0.3-1.5,0.5-2.4,0.6
c0.9-0.5,1.5-1.3,1.8-2.3c-0.8,0.5-1.7,0.8-2.6,1C17.3,3.5,14.7,3.4,13,5c-1.1,1-1.5,2.5-1.2,3.9C8.5,8.7,5.5,7.2,3.4,4.6
c-1.1,1.9-0.5,4.3,1.3,5.5c-0.7,0-1.3-0.2-1.9-0.5c0,0,0,0,0,0.1c0,2,1.4,3.6,3.3,4c-0.6,0.2-1.2,0.2-1.9,0.1
c0.5,1.7,2.1,2.8,3.8,2.8c-1.5,1.1-3.2,1.8-5.1,1.8c-0.3,0-0.7,0-1-0.1C3.9,19.5,6.1,20.1,8.3,20.1"
              ></path>
            </svg>
            <span>Twitter</span>
          </div>
          <div className="communityli">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              enable-background="new 0 0 24 24"
              fill="inherit"
              data-testid="link-icon"
              class="sc-jrAFXE dqugkO"
            >
              <path d="M20.9 2h-17.8c-.6 0-1.1.5-1.1 1.1v17.8c0 .6.5 1.1 1.1 1.1h9.6v-7.7h-2.6v-3h2.6v-2.3c0-2.6 1.6-4 3.9-4 1.1 0 2.1.1 2.3.1v2.7h-1.6c-1.3 0-1.5.6-1.5 1.5v1.9h3l-.4 3h-2.6v7.8h5.1c.6 0 1.1-.5 1.1-1.1v-17.8c0-.6-.5-1.1-1.1-1.1z"></path>
            </svg>
            <span>Facebook</span>
          </div>
          <div className="communityli">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              enable-background="new 0 0 24 24"
              fill="inherit"
              data-testid="link-icon"
              class="sc-jrAFXE dqugkO"
            >
              <path d="M14.6,9.3l-4,3.8c-0.1,0.1-0.2,0.3-0.3,0.5l-0.1,1c0,0.1-0.2,0.2-0.2,0l-0.5-1.9c-0.1-0.2,0-0.4,0.2-0.6l4.9-3C14.6,9.2,14.7,9.3,14.6,9.3z"></path>
              <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M15.1,16.5c-0.1,0.2-0.3,0.3-0.5,0.2l-2.5-1.8c-0.1-0.1-0.4-0.1-0.5,0L10.2,16C10,16.1,9.8,16,9.7,15.8l-1-3.1l-2.5-0.9c-0.3-0.1-0.3-0.5,0-0.5l10.3-4c0.2-0.1,0.4,0.1,0.4,0.3L15.1,16.5z"></path>
            </svg>
            <span>Telegram</span>
          </div>
          <div className="communityli">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              enable-background="new 0 0 24 24"
              fill="inherit"
              data-testid="link-icon"
              class="sc-jrAFXE dqugkO"
            >
              <path d="M22.5,6.7c-0.3-1-1-1.7-1.9-2C18.9,4.3,12,4.3,12,4.3s-6.9,0-8.6,0.5c-0.9,0.3-1.7,1-1.9,2C1,8.4,1,12,1,12s0,3.6,0.5,5.3 c0.3,1,1,1.7,1.9,2c1.7,0.5,8.6,0.5,8.6,0.5s6.9,0,8.6-0.5c0.9-0.3,1.7-1,1.9-2C23,15.6,23,12,23,12S23,8.4,22.5,6.7z M9.8,15.3V8.7l5.8,3.3L9.8,15.3z"></path>
            </svg>
            <span>Youtube</span>
          </div>
          <div className="communityli">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              enable-background="new 0 0 24 24"
              fill="inherit"
              data-testid="link-icon"
              class="sc-jrAFXE dqugkO"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.3729 2C16.7001 4.83809 18.2702 6.53015 21 6.71015V9.90226C19.418 10.0583 18.0323 9.53624 16.4205 8.55221V14.5224C16.4205 22.1067 8.22506 24.4767 4.93022 19.0406C2.81296 15.5424 4.10948 9.40424 10.9014 9.15823V12.5243C10.384 12.6083 9.83085 12.7403 9.32532 12.9144C7.81469 13.4304 6.95827 14.3964 7.19616 16.1005C7.65411 19.3646 13.5896 20.3306 13.096 13.9524V2.006H16.3729V2Z"
              ></path>
            </svg>
            <span>Tik Tok</span>
          </div>
          <div className="communityli">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              enable-background="new 0 0 24 24"
              fill="inherit"
              data-testid="link-icon"
              class="sc-jrAFXE dqugkO"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.14911 0L0.537109 4.119V20.955H6.26811V24H9.49211L12.5371 20.955H17.1941L23.4631 14.686V0H2.14911V0ZM21.3131 13.612L17.7311 17.194H12.0001L8.95511 20.239V17.194H4.11911V2.149H21.3131V13.612ZM17.7311 6.269V12.531H15.5821V6.269H17.7311ZM12.0001 6.269V12.531H9.85111V6.269H12.0001Z"
              ></path>
            </svg>
            <span>Twitch</span>
          </div>
        </div>
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
