import { combineReducers } from 'redux';
import { productReducer, selectedProductreducer } from './productReducer';

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductreducer,
});

export default reducers;
