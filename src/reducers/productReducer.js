import { ActionsType } from "../components/actionType";

const myId = () => Math.floor(Math.random() * 500);
const initialState = {
  products: [
  ]
}
export const productReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionsType.SET_PRODUCTS:
      return {...state, products: payload};
  
    default:
      return state;
  }
}

export const selectedProductreducer = (state = {}, {type, payload}) => {
  switch (type) {
    case ActionsType.SELECT_PRODUCTS:
      return { ...state, ...payload };
    default:
      return state;
  }
};