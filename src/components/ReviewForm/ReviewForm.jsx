import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useState, useRef, useContext } from "react";
import "./ReviewForm.scss";
import { ProductContext } from "../../context/ProductContext/ProductState";

function ReviewForm(props) {
  const { reviewProduct } = useContext(ProductContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState({
    title: "",
    content: "",
    stars: 0,
    UserId: props.userId,
    ProductId: props.productId
  });

  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const starsRef = useRef(null);

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    reviewProduct(data);
    setShow(false);
    setData({
      title: "",
      content: "",
      stars: 0,
    });
    // toastRef.current.innerHTML = "Review created";
    // setShowToast(true);
    // setTimeout(() => {
    //   setShowToast(false);
    // }, 1500);
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
            <div ref={titleRef} className="form-group">
              <input
                type="text"
                placeholder="title"
                value={data.title}
                onChange={handleInputChange}
                name="title"
              />
            </div>
            <div ref={contentRef} className="form-group">
              <input
                type="text"
                placeholder="content"
                value={data.content}
                onChange={handleInputChange}
                name="content"
              />
            </div>
            <div ref={starsRef} className="form-group">
              <input
                type="number"
                placeholder="# stars"
                value={data.stars}
                onChange={handleInputChange}
                name="stars"
                min={0}
                max={5}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ReviewForm;
