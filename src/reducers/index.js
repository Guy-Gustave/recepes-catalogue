import { combineReducers } from "redux";
import { productReducer, selectedProductreducer } from "./productReducer";

export const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductreducer,
});