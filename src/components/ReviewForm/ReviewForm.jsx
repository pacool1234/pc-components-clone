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
    ProductId: props.productId,
  });

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
      stars: stars > 5 ? 5 : stars,
    });
    // toastRef.current.innerHTML = "Review created";
    // setShowToast(true);
    // setTimeout(() => {
    //   setShowToast(false);
    // }, 1500);
  };

  return (
    <>
      <button className="reviewButton" onClick={handleShow}>
        Review
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Submit a Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="title"
                value={data.title}
                onChange={handleInputChange}
                name="title"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="content"
                value={data.content}
                onChange={handleInputChange}
                name="content"
              />
            </div>
            <div className="form-group">
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
          <button id="submitButton" onClick={handleSubmit}>
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ReviewForm;
