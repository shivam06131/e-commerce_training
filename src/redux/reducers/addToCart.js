export const addToCartReducer = (
  initialState = { items: [], favs: [] },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if ([...initialState.items].length > 0) {
        var value = [...initialState.items].some(
          ({ index }) => index === action.payload.index
        );
      }

      console.log("[...initialState.items]", [...initialState.items]);
      console.log("value", value);

      if (value) {
        //finding that particular object.
        var data = [...initialState.items].map((val) => {
          //if it is there then only update that particular item
          if (val.index === action.payload.index) {
            const { items, image, name, price, index } = val;
            let counter = val.count;
            //this is return of Array.map() => it  wil give new array with the member updated in it
            return {
              items,
              image,
              name,
              price,
              index,
              count: (val.count = counter + 1),
            };
          } else {
            //this is return of Array.map() => it  wil give new array with the member not updated in it
            return val;
          }
        });
        //this will update the store with the new item count
        return {
          // items: [...data],
          items: data,
          favs: initialState.favs,
        };
      } else {
        return {
          // {...action.payload} => will create a new object with the same properties.
          items: [{ ...action.payload }, ...initialState.items],
          favs: initialState.favs,
        };
      }

    case "ADD_TO_FAV":
      if (initialState.favs.includes(action.payload)) {
        return initialState;
      }
      return {
        favs: [...initialState.favs, action.payload],
        items: initialState.items,
      };
    default:
      return initialState;
  }
};
