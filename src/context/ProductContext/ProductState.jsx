import React, { createContext, useReducer } from "react";
import AppReducer from "./ProductReducer";
import axios from "axios";

const initialState = {
  products: [],
};

export const ProductContext = createContext(initialState);

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getProducts = async (id) => {
    const res = await axios.get("http://localhost:3000/products/getAll");
    const productsFiltered = res.data.filter(product => product.Category.id == id)
    console.log(id);
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

  const getSingleProduct = async (id) => {
    const res = await axios.get("http://localhost:3000/products/getAll");
    const productsFiltered = res.data.filter(product => product.id == id)
    dispatch({
      type: "GET_PRODUCTS",
      payload: productsFiltered,
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        getProducts,
        sortProductsAtoZ,
        sortProductsZtoA,
        sortHighestPrice,
        sortLowestPrice,
        getSingleProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
