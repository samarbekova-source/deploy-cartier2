import React from "react";
import { useReducer } from "react";
import axios from "axios";
import { CASE_GET_JEWELRY, CASE_GET_ONE_JEWELRY } from "../helpers/cases";
import { JEWELRY_API } from "../helpers/consts";

export const jewelryContext = React.createContext();

const INIT_STATE = {
  jewelry: [],
  oneJewelry: null,
  productsCount: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_JEWELRY:
      return {
        ...state,
        jewelry: action.payload.data,
        productsCount: action.payload.headers["x-total-count"],
      };
    case CASE_GET_ONE_JEWELRY:
      return {
        ...state,
        oneJewelry: action.payload.data,
      };
    default:
      return state;
  }
};

const JewelryContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getJewelry() {
    let result = await axios(JEWELRY_API + window.location.search);
    console.log(result);
    dispatch({
      type: CASE_GET_JEWELRY,
      payload: result,
    });
  }
  async function deleteJewelry(id) {
    await axios.delete(`${JEWELRY_API}/${id}`);
    getJewelry();
  }

  async function getOneJewelry(id) {
    let result = await axios(`${JEWELRY_API}/${id}`);
    dispatch({
      type: CASE_GET_ONE_JEWELRY,
      payload: result,
    });
  }
  async function createProduct(newProduct) {
    await axios.post(JEWELRY_API, newProduct);
    getJewelry();
  }

  async function updateProduct(id, editedProduct) {
    await axios.patch(`${JEWELRY_API}/${id}`, editedProduct);
    getJewelry();
  }

  return (
    <jewelryContext.Provider
      value={{
        jewelry: state.jewelry,
        oneJewelry: state.oneJewelry,
        productsCount: state.productsCount,
        getJewelry,
        deleteJewelry,
        getOneJewelry,
        createProduct,
        updateProduct,
      }}
    >
      {children}
    </jewelryContext.Provider>
  );
};

export default JewelryContextProvider;
