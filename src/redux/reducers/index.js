import { combineReducers } from "redux";
import { itemReducer } from "./itemReducers";
import { addToCartReducer } from "./addToCart";

export default combineReducers({
  items: itemReducer,
  cartItems: addToCartReducer,
});
