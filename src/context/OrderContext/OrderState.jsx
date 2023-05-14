import React, { createContext, useReducer } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000/";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const createOrder = async (order) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const arrayOfIDs = [];
      for (const item of order) {
        for (let i = 0; i < item.amount; i++) {
          const id = item.id;
          arrayOfIDs.push(id);
        }
      }

      const res = await axios.post(
        API_URL + "orders/create",
        { ProductId: arrayOfIDs },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      setTimeout(() => {
        console.log("waiting");
      }, 1000);

      // Get all orders history from LS
      const ordersFromLS = JSON.parse(localStorage.getItem("orders")) || [];

      // Get this user's orders history
      const thisUserOrdersHistory = ordersFromLS[res.data.order.UserId] || {};

      // Convert first arrayOfIDs into array of objects > {productId: amount}
      const arrayOfObjects = {}
      for (const id of arrayOfIDs) {
        let productAmount = arrayOfObjects[id] || 0
        productAmount++
        arrayOfObjects[id] = productAmount
      }

      // Add arrayOfObjects into it
      thisUserOrdersHistory[res.data.order.id] = arrayOfObjects;

      // Add it back to all orders
      ordersFromLS[res.data.order.UserId] = thisUserOrdersHistory
      
      // Push it back to LS
      localStorage.setItem("orders", JSON.stringify(ordersFromLS))

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
