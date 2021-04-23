import { ActionsType } from "../components/actionType";

const myId = () => Math.floor(Math.random() * 500);
const initialState = {
  products: [
    {
      id: myId(),
      title: 'salad.',
      category: 'vegetables',
    },
    {
      id: myId,
      title: 'chicken',
      category: 'white_meat',
    },
    {
      id: myId,
      title: 'rice',
      category: 'cerealis',
    }
  ]
}
export const productReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionsType.SET_PRODUCTS:
      return state;
  
    default:
      return state;
  }
}