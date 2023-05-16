const products = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      const productsWithDiscountedPrice = [];
      action.payload.forEach((product) => {
        const singleProduct = product;
        singleProduct["discountedPrice"] =
          Number(product["price"]) * (1 - Number(product["discount"]) / 100);
        productsWithDiscountedPrice.push(product);
      });
      return {
        ...state,
        products: productsWithDiscountedPrice,
      };

    case "SORT":
      const sorted = state.products.sort(function (a, b) {
        let keyA, keyB;
        if (action.payload.property == "name") {
          keyA = a[action.payload.property];
          keyB = b[action.payload.property];
        } else {
          keyA = +a[action.payload.property];
          keyB = +b[action.payload.property];
        }
        if (action.payload.isAsc) {
          return keyA < keyB ? -1 : 1;
        } else {
          return keyA < keyB ? 1 : -1;
        }
      });
      return {
        ...state,
        products: sorted,
      };

    case "SORT_BEST_SELLER":
      const sortedBestSeller = state.products.sort(function (a, b) {
        let keyA, keyB;
        keyA = a.unitsSold;
        keyB = b.unitsSold;
        return keyA < keyB ? 1 : -1;
      });
      return {
        ...state,
        products: sortedBestSeller,
      };

    case "ADD_ITEM":
      const cartFromLS = JSON.parse(localStorage.getItem("cart"));
      const productAlreadyPresent = cartFromLS.some(
        (item) => item.id == action.payload["id"]
      );
      if (productAlreadyPresent) {
        state.cart = state.cart.map((item) => {
          if (item.id == action.payload["id"]) {
            item.amount++;
          }
          return item;
        });
        return {
          ...state,
          cart: [...state.cart],
          totalItems: state.cart.reduce((total, obj) => total + obj.amount, 0),
          totalPrice: state.cart.reduce(
            (total, obj) =>
              total +
              Number(obj.amount) *
                Number(obj.price) *
                (1 - Number(obj.discount) / 100),
            0
          ),
        };
      } else {
        action.payload["amount"] = 1;
        const newCart = [...state.cart, action.payload];
        console.log("newCart", newCart);
        return {
          ...state,
          cart: newCart,
          totalItems: newCart.reduce((total, obj) => total + obj.amount, 0),
          totalPrice: newCart.reduce(
            (total, obj) =>
              total +
              Number(obj.amount) *
                Number(obj.price) *
                (1 - Number(obj.discount) / 100),
            0
          ),
        };
      }

    case "SUBTRACT_ITEM":
      state.cart = state.cart.map((item) => {
        if (item.id == action.payload["id"]) {
          if (item.amount > 1) {
            item.amount--;
            // state.totalPrice -=
            //   Number(action.payload["price"]) *
            //   (1 - Number(action.payload["discount"]) / 100);
          } else {
            item.amount = 1;
          }
        }
        return item;
      });
      return {
        ...state,
        cart: [...state.cart],
        totalItems: state.cart.reduce((total, obj) => total + obj.amount, 0),
        totalPrice: state.cart.reduce(
          (total, obj) =>
            total +
            Number(obj.amount) *
              Number(obj.price) *
              (1 - Number(obj.discount) / 100),
          0
        ),
      };

    case "DELETE_ITEM":
      state.cart = state.cart.filter(
        (item) => item.id !== action.payload["id"]
      );
      state.totalPrice -=
        Number(action.payload["amount"]) *
        Number(action.payload["price"]) *
        (1 - Number(action.payload["discount"]) / 100);
      return {
        ...state,
        cart: [...state.cart],
        totalItems: state.cart.reduce((total, obj) => total + obj.amount, 0),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
        totalItems: 0,
        totalPrice: 0,
      };
    default:
      return state;
  }
};

export default products;
