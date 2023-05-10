import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
  products: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getProducts = async () => {
    const res = await axios.get("http://localhost:3000/products/getAll");
    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data,
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

  return (
    <GlobalContext.Provider
      value={{
        products: state.products,
        getProducts,
        sortProductsAtoZ,
        sortProductsZtoA,
        sortHighestPrice,
        sortLowestPrice,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
