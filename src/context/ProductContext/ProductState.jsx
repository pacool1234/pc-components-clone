import React, { createContext, useReducer } from "react";
import AppReducer from "./ProductReducer";
import axios from "axios";

const cart = JSON.parse(localStorage.getItem("cart")) || [];
const totalItems = cart.reduce((total, obj) => total + obj.amount, 0);

const initialState = {
  products: [],
  cart: cart,
  totalItems: totalItems,
};

export const ProductContext = createContext(initialState);

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getProducts = async (id) => {
    const res = await axios.get("http://localhost:3000/products/getAll");
    const productsFiltered = res.data.filter(
      (product) => product.Category.id == id
    );
    dispatch({
      type: "GET_PRODUCTS",
      payload: productsFiltered,
    });
  };

  const sort = (property, isAsc) => {
    dispatch({
      type: "SORT",
      payload: {
        property: property,
        isAsc: isAsc,
      },
    });
  };

  const getSingleProduct = async (id) => {
    const res = await axios.get("http://localhost:3000/products/getAll");
    const productsFiltered = res.data.filter((product) => product.id == id);
    dispatch({
      type: "GET_PRODUCTS",
      payload: productsFiltered,
    });
  };

  const addCart = (product) => {
    dispatch({
      type: "ADD_CART",
      payload: product,
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };



  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        totalItems: state.totalItems,
        getProducts,
        sort,
        getSingleProduct,
        addCart,
        clearCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
