import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./ReviewForm.scss";

function ReviewForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  const passwordRef = useRef(null);
  const emailRef = useRef(null);

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

  return (
    <>
      <button onClick={handleShow}>Review</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Submit a Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
          {/* <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter title" />
            </Form.Group>

            <Form.Group controlId="formContent">
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter content" />
            </Form.Group>

            <Form.Group controlId="formStars">
              <Form.Label>Number of Stars</Form.Label>
              <Form.Control type="number" min={1} max={5} placeholder="Enter number of stars" />
            </Form.Group>
          </Form> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ReviewForm;
