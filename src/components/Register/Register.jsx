import React from 'react'
import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css"

const Register = () => {
  let maxId = 1;
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  let navigate = useNavigate();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const alertRef = useRef(null);
  
  const handleInputChange = (event) => {
    if (data.name.length + 1 < 3) {
      setMessage("Name must be at least 3 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send to LocalStorage
    const dataArray = JSON.parse(localStorage.getItem("formDataArray")) || [];
    if (dataArray.length > 0) {
      maxId = Math.max(...dataArray.map((o) => o.id));
      maxId++;
    }
    const formData = {
      id: maxId,
      ...data,
    };
    dataArray.push(formData);
    console.log(maxId);
    localStorage.setItem("formDataArray", JSON.stringify(dataArray));
    // Reset data
    setData({
      name: "",
      email: "",
    });
    // Redirect to Home Page
    alertRef.current.classList.remove('hidden')
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <>
      <div>Register</div>
      <div>
      <Link to="/"><span className="material-icons">home</span></Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div ref={nameRef} className="form-group">
          <input
            type="text"
            placeholder="name"
            value={data.name}
            onChange={handleInputChange}
            name="name"
          />
        </div>
        <span>{message}</span>
        <div ref={emailRef} className="form-group">
          <input
            type="email"
            placeholder="email"
            value={data.email}
            onChange={handleInputChange}
            name="email"
          />
        </div>
        <button type="submit" disabled={btnDisabled}>
          Enviar
        </button>
      </form>
      <div className="alert alert-success hidden" role="alert" ref={alertRef}>
        Your info has been submitted
      </div>
    </>
  )
}

export default Register