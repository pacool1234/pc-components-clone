import React, { useContext } from "react";
import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import { UserContext } from "../../context/UserContext/UserState";

const Login = () => {
  const { login, message, role, token } = useContext(UserContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const alertRef = useRef(null);

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

    // Redirect to Home Page
    alertRef.current.classList.remove("hidden");
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  useEffect(() => {
    if (token) {
      console.log("role", role);
      console.log("message", message);
      // Maybe implement success notification here?
    }
  }, [token]);

  return (
    <div>
      <div>
        <Link to="/">
          <img src="../src/images/logo.png" width="69" height="24" />
        </Link>
      </div>
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
            type="text"
            placeholder="password"
            value={data.password}
            onChange={handleInputChange}
            name="password"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      <div className="alert alert-success hidden" role="alert" ref={alertRef}>
        {message}
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
    </div>
  );
};

export default Login;
