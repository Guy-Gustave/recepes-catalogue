import ActionsType from '../components/actionType';

export const setProducts = (products) => ({
  type: ActionsType.SET_PRODUCTS,
  payload: products,
});

export const selectedProduct = (product) => ({
  type: ActionsType.SELECT_PRODUCTS,
  payload: product,
});
