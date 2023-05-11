import { createContext, useReducer } from "react";
import CategoryReducer from "./CategoryReducer";
import axios from "axios";

const initialState = {
  categories: [],
};

const API_URL = "http://localhost:3000/";

export const CategoryContext = createContext(initialState);

export const CategoryProvider = ({children}) => {
  const [state, dispatch] = useReducer(CategoryReducer, initialState)

  const getCategories = async (id) => {
    const res = await axios.get(API_URL + "categories/getjustnames")
    dispatch({
      type: "GET_CATEGORIES",
      payload: res.data
    })
  }

  return (
    <CategoryContext.Provider
      value={{
        categories: state.categories,
        getCategories,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );

}
