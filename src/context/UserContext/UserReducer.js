const users = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.payload.token,
        role: action.payload.user.role,
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default users;
