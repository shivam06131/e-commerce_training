import * as reducers from "./addToCart.js";

describe("initial state", () => {
  const initialState = { items: [], favs: [] };
  it("return initial state", () => {
    expect(reducers.addToCartReducer(undefined, {})).toEqual(initialState);
  });

  it("ADD_TO_CART", () => {
    expect(
      reducers.addToCartReducer(initialState, {
        type: "ADD_TO_CART",
        payload: { one: 1 },
      })
    ).toEqual({
      items: [{ one: 1 }],
      favs: [],
    });
  });
});
