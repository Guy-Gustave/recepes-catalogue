import { ActionsType } from "../components/actionType"

export const setProducts = (products) => {
  return {
    type: ActionsType.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionsType.SELECT_PRODUCTS,
    payload: product,
  };
};
