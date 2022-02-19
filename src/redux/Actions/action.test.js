import * as actions from "./itemActions";
import configureMockStore from "redux-mock-store";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const mockStore = configureMockStore(applyMiddleware(thunk));

it("testing setItems", () => (dispatch) => {
  const store = mockStore();
  store.dispatch(actions.setItems());
  const action = store.getActions();
  const data = "this is data";
  const action2 = {
    type: "SET_ITEMS",
    payload: data,
  };
  expect(action[0]).toEqual(action2);
  //   expect(actions.setItems(data)).toEqual(dispatch(action));
});
