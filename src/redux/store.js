import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { itemReducer } from "./reducers/itemReducers";
import combineReducers from "./reducers/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers,
  composeEnhancers(compose(applyMiddleware(thunk)))
);
export default store;
