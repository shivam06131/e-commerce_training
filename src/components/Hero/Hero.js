import React, { useEffect, useState } from "react";
import "./Hero.css";
import items from "../DataAssets/items";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../redux/Actions/itemActions";
import { addToCart, addToFav } from "../../redux/Actions/itemActions";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Hero = () => {
  const [paginationData, setPaginationData] = useState([]);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { favs } = useSelector((store) => store.cartItems);
  console.log("🚀 ~ file: Hero.js ~ line 16 ~ Hero ~ favs", favs);

  useEffect(() => {
    dispatch(setItems(items));
    setPaginationData(pagination().next().value);
  }, []);

  let initial = 0;
  let currFinal = 4;
  let forLen = Math.ceil(items.length / 4);

  var value;
  const handleLoadMore = () => {
    //!async setState
    // console.log("count" , count)
    setCount(count + 1);
    // console.log("count" , count)
    let i = 1;
    pagination().next();
    while (i <= count) {
      value = pagination().next().value;
      // console.log("value", value);
      setPaginationData(value);
      i++;
    }
  };
  // console.log("paginationData", paginationData);

  function* pagination() {
    for (let i = 1; i <= forLen; i++) {
      let data = items.slice(initial, currFinal);
      // initial = initial + 4;
      currFinal = currFinal + 4;
      yield data;
    }
  }

  const handleAddToCart = (indexNo) => {
    const includesItem = paginationData.find(({ id }) => id == indexNo);
    const { amountOfItems, image, name, price, id: index } = includesItem;
    // dispatch(addToCart());
    dispatch(addToCart(amountOfItems, image, name, price, index));
  };
  const handleToFav = (id) => {
    dispatch(addToFav(id));
  };

  //! pagination logic
  // [ 1 , 2 ,3 ,4 ,5 ,6 , 7 , 8]

  // 1) 1 , 2 , 3 , 4
  // 2) 5 , 6 , 7 , 8

  //  5/4 =>  Math.ceil(1.2) => 2
  //let data = item.splice(0 ,4);
  // yield [...data]

  //initial = 0;
  // final = 4 ,

  // initial = 4;
  // final = 8;

  //! fav logic
  // arr = [ 0 , 2 , 4]
  // items = [{...},{...}]
  //arr.includes(({items.id}))
  // if(favs.includes(({paginationData.id})))
  return (
    <div>
      <div className="Hero_container">
        {paginationData.map(({ name, image, price, amountOfItems, id }) => {
          return (
            <div className="Hero_item-container" key={id}>
              <h4>{name}</h4>
              <img
                className="Hero_item-image"
                src={image}
                alt="pic"
                onClick={() => navigate(`${`./items/${id}`}`)}
              />
              <p>Mrp: {price} $</p>
              {amountOfItems ? <p>In Stock</p> : <p>Out Of Stock</p>}

              <div className="new_button_holder">
                <button onClick={() => handleAddToCart(id)}>Add</button>
                <button onClick={() => handleToFav(id)}>Fav</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="Hero_loadMore-container">
        <button className="Hero_loadMore" onClick={handleLoadMore}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default Hero;
