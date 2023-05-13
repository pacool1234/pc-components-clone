import React, { createContext, useReducer } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000/";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const createOrder = async (order) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const arrayOfIDs = [];
    for (const item of order) {
      for (let i = 0; i < item.amount; i++) {
        const id = item.id;
        arrayOfIDs.push(id);
      }
    }
    console.log("idArray: ", arrayOfIDs);
    try {
      const res = await axios.post(API_URL + "orders/create", { ProductId: arrayOfIDs },
        {
          headers: {
            Authorization: token,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <OrderContext.Provider
      value={{
        createOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
