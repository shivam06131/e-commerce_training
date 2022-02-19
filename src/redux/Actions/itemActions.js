// export const getItems = (data) => async (dispatch) => {
//   dispatch({ type: "GET_ITEMS", payload: data });
// };
export const setItems = (data) => (dispatch) => {
  dispatch({ type: "SET_ITEMS", payload: data });
};

export const addToCart =
  (...data) =>
  (dispatch) => {
    const [items, image, name, price, index] = data;
    const count = 1;
    dispatch({
      type: "ADD_TO_CART",
      payload: { items, image, name, price, index, count },
    });
  };

export const addToFav = (id) => (dispatch) => {
  dispatch({
    type: "ADD_TO_FAV",
    payload: id,
  });
};
