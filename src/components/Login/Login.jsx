import React, { useContext } from "react";
import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.scss";
import { UserContext } from "../../context/UserContext/UserState";

const Login = () => {
  const { login, message, role, token } = useContext(UserContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const toastRef = useRef(null);

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(data);
    // Reset data
    setData({
      email: "",
      password: "",
    });
    // SOFIA: always displays "Incorrect email/password"!!!!
    if (token.length <= 0) {
      toastRef.current.innerHTML = "Incorrect email/password";
      console.log(token.length > 0);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 1500);
    }
    
  };

  useEffect(() => {
    if (token) {
      setTimeout(() => {
        navigate("/profile");
      }, 2500);
    }
    if (token && token.length > 0) {
      toastRef.current.innerHTML = "You have successfully logged in";
      setShowToast(true);
    }
    if(!token) {
      console.log('wassuuuuuup');
    }
  }, [token]);

  return (
    <>
      <header className="topHeader">
        <Link to="/">
          <img src="../src/images/logo.png" width="115" height="40" />
        </Link>
      </header>
      <main className="sectionContainer">
        <section className="section" id="leftSection">
          <div className="logoContainer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              enableBackground="new 0 0 24 24"
              className="sc-pGacB jVEfMO sc-jhLFFE fciOeo"
            >
              <path
                fillRule="evenodd"
                d="M2.25 16.875V5.25h12v7.906H15v-5.28h4.824l1.926 5.05V16.5h-1.937a2.44 2.44 0 0 0-2.375-1.875 2.43 2.43 0 0 0-2.406 2.063H8.594a2.43 2.43 0 0 0-2.406-2.062c-1.28 0-2.336.988-2.43 2.25zm12.78.563H8.594A2.43 2.43 0 0 1 6.188 19.5c-1.152 0-2.117-.797-2.375-1.875H1.5V4.5H15v2.625h5.336L22.5 12.79v4.46h-2.633c-.098 1.262-1.148 2.25-2.43 2.25a2.43 2.43 0 0 1-2.406-2.062zm.72-.375c0 .934.754 1.688 1.688 1.688s1.688-.754 1.688-1.687-.754-1.687-1.687-1.687-1.687.754-1.687 1.688zm-9.562-1.687c.934 0 1.688.754 1.688 1.688S7.12 18.75 6.188 18.75 4.5 17.996 4.5 17.063s.754-1.687 1.688-1.687zM17.625 9.75V12h2.25v.75h-3v-3zm0 0"
              ></path>
            </svg>
            <div>
              <h4>AAAAAA</h4>
              <span>aaaaaaa</span>
            </div>
          </div>
          <div className="logoContainer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              enableBackground="new 0 0 24 24"
              className="sc-pGacB jVEfMO sc-jhLFFE fciOeo"
            >
              <path
                fillRule="evenodd"
                d="M12 1.293a7.13 7.13 0 0 0-7.125 7.125A7.13 7.13 0 0 0 12 15.543a7.13 7.13 0 0 0 7.125-7.125A7.13 7.13 0 0 0 12 1.293zM4.125 8.418C4.125 4.07 7.648.543 12 .543s7.875 3.527 7.875 7.875c0 1.84-.63 3.53-1.687 4.87l3.44 7.203-3.81-.422-2.117 3.387-3.328-7.172c-.125.008-.246.008-.37.008s-.246-.004-.37-.008L8.3 23.457 6.188 20.07l-3.816.422 3.44-7.2a7.83 7.83 0 0 1-1.687-4.875zm9.04 7.79c1.75-.258 3.31-1.094 4.488-2.305l2.72 5.69-2.94-.328-1.633 2.617zm-6.816-2.3c1.18 1.21 2.738 2.047 4.488 2.305l-2.633 5.676-1.637-2.617-2.94.328zm7.066-7.047l-1.387-2.867-1.43 2.844-3.148.434 2.258 2.242-.562 3.13 2.828-1.457 2.805 1.5-.512-3.14L16.56 7.34zM11.1 7.53l.922-1.84.895 1.852 2.035.31-1.484 1.426.336 2.027-1.812-.97-1.824.94.363-2.027-1.465-1.445zm0 0"
              ></path>
            </svg>
            <div>
              <h4>BBBBBB</h4>
              <span>bbbbbb</span>
            </div>
          </div>
        </section>
        <section className="section" id="rightSection">
          <div>Log in</div>
          <form onSubmit={handleSubmit}>
            <div ref={emailRef} className="form-group">
              <input
                type="email"
                placeholder="email"
                value={data.email}
                onChange={handleInputChange}
                name="email"
              />
            </div>
            <div ref={passwordRef} className="form-group">
              <input
                type="password"
                placeholder="password"
                value={data.password}
                onChange={handleInputChange}
                name="password"
              />
            </div>
            <button type="submit">Enviar</button>
          </form>

          <div
            className={`toast position-fixed top-0 end-0 m-3 ${
              showToast ? "show" : ""
            }`}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-body" ref={toastRef}></div>
          </div>

          <p className="hLine">
            <span>Not a member yet?</span>
          </p>
          <div>
            <Link to="/register">
              <button type="button" className="buttonLink">
                Sign up
              </button>
            </Link>
          </div>
        </section>
      </main>
      <div className="copyright">
        <p>
          PC Components LLC TIN 275-234-098. 1600 Pennsylvania Avenue, NW
          Washington, D.C. 20500 U.S.
        </p>
      </div>
      <div className="blankDiv"></div>
    </>
  );
};

export default Login;
