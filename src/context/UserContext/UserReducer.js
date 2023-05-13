const users = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.payload.token,
        role: action.payload.user.role,
        message: action.payload.message,
      };
    case "GET_USER_INFO":
      return {
        ...state,
        user: action.payload
      };
    case "GET_ORDERS":
      return {
        ...state,
        orders: action.payload
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        role: null,
        token: null,
      };
    default:
      return state;
  }
};

export default users;
