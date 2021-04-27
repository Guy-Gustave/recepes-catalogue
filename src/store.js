import { createStore } from 'redux';
import reducers from './reducers/index';

const store = createStore(
  reducers,
  {},
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
