import React, { createContext, useReducer } from "react";
import AppReducer from "./ProductReducer";
import axios from "axios";
import products from "./ProductReducer";

const cart = JSON.parse(localStorage.getItem("cart"));
const totalItems = cart.reduce((total, obj) => total + obj.amount, 0)
console.log("total in ProductState", totalItems);
const initialState = {
  products: [],
  cart: cart ? cart : [],
  totalItems: totalItems,
};

export const ProductContext = createContext(initialState);

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getProducts = async (id) => {
    const res = await axios.get("http://localhost:3000/products/getAll");
    const productsFiltered = res.data.filter(product => product.Category.id == id)
    dispatch({
      type: "GET_PRODUCTS",
      payload: productsFiltered,
    });
  };

  const sortProductsAtoZ = () => {
    dispatch({
      type: "SORT_PRODUCTS_A_TO_Z"
    });
  };

  const sortProductsZtoA = () => {
    dispatch({
      type: "SORT_PRODUCTS_Z_TO_A"
    });
  };

  const sortHighestPrice = () => {
    dispatch({
      type: "SORT_HIGHEST_PRICE"
    });
  };

  const sortLowestPrice = () => {
    dispatch({
      type: "SORT_LOWEST_PRICE"
    });
  };

  const sort = (property, isAsc) => {
    dispatch({
      type: "SORT",
      payload: {
        property: property,
        isAsc: isAsc,
      }
    })
  }

  const getSingleProduct = async (id) => {
    const res = await axios.get("http://localhost:3000/products/getAll");
    const productsFiltered = res.data.filter(product => product.id == id)
    dispatch({
      type: "GET_PRODUCTS",
      payload: productsFiltered,
    });
  };

  const addCart = (product) => {
    dispatch({
      type: "ADD_CART",
      payload: product,
    })
  }

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        getProducts,
        sortProductsAtoZ,
        sortProductsZtoA,
        sortHighestPrice,
        sortLowestPrice,
        sort,
        getSingleProduct,
        addCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
