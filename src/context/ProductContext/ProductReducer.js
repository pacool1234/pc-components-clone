const products = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "SORT_PRODUCTS_A_TO_Z":
      const sortedProductsAtoZ = state.products.sort(function (a, b) {
        const keyA = a.name;
        const keyB = b.name;
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });
      return {
        ...state,
        products: sortedProductsAtoZ,
      };
    case "SORT_PRODUCTS_Z_TO_A":
      const sortedProductsZtoA = state.products.sort(function (a, b) {
        const keyA = a.name;
        const keyB = b.name;
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
        return 0;
      });
      return {
        ...state,
        products: sortedProductsZtoA,
      };
    case "SORT_HIGHEST_PRICE":
      const sortedHighestPrice = state.products.sort(function (a, b) {
        const keyA = +a.price;
        const keyB = +b.price;
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
        return 0;
      });
      return {
        ...state,
        products: sortedHighestPrice,
      };
      case "SORT_LOWEST_PRICE":
        const sortedLowestPrice = state.products.sort(function (a, b) {
          const keyA = +a.price;
          const keyB = +b.price;
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
        });
        return {
          ...state,
          products: sortedLowestPrice,
        };
    default:
      return state;
  }
};

export default products;
