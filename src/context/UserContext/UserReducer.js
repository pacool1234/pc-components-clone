const users = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.payload.token,
        role: action.payload.user.role,
      };
    case "GET_USER_INFO":
      return {
        ...state,
        user: action.payload,
      };
    case "GET_ORDERS":
      const ordersFromLS = JSON.parse(localStorage.getItem("orders"));
      const ordersFromServer = action.payload;
      const updatedAllOrders = [];
      for (const order of ordersFromServer) {
        const updatedOrder = order;
        const updatedProducts = [];
        for (const product of order.Products) {
          const singleProduct = product;
          // iterate ordersFromLS to find and assign amount to singleProduct
          const userSingleOrderObjectLS = ordersFromLS[order.UserId][order.id];
          const amount = userSingleOrderObjectLS[product.id];
          // finally
          singleProduct["amount"] = amount;
          updatedProducts.push(singleProduct);
        }
        updatedOrder["Products"] = updatedProducts;
        updatedAllOrders.push(updatedOrder);
      }

      return {
        ...state,
        orders: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        role: null,
        token: null,
      };
    case "REGISTER_SUCCESS":
      console.log("Success!!!");
      return {
        ...state,
        message: action.payload.message,
      };
    case "REGISTER_FAIL":
      console.log("this is the error", action.payload);
      return {
        ...state,
        message: action.payload,
      };
    case "CLEAR_STATE":
      return {
        token: "",
        user: null,
        role: "",
        message: "",
        orders: [],
      };
    default:
      return state;
  }
};

export default users;
