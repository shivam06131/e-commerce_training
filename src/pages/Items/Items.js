import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { addToCart } from "../../redux/Actions/itemActions";
import "./items.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Items = () => {
  const [data] = useSelector((val) => val.items);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentItem = data.filter((item) => parseInt(item.id) === parseInt(id));
  const [{ amountOfItems, image, name, price, id: index }] = currentItem;

  const handleCart = () => {
    dispatch(addToCart(amountOfItems, image, name, price, index));
    alert("Added to the cart");
  };

  return (
    <div>
      <div className="item_container">
        <div className="item_container-root">
          <img src={image} alt="alt" />
          <div className="item_container-data">
            <h2>{name}</h2>
            <h4>{price} $</h4>
            {amountOfItems > 0 ? <p> In Stock</p> : <p>Out of stock</p>}
          </div>
          <button onClick={handleCart}>Add to Cart</button>
          <button onClick={() => navigate("/checkout")}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Items;
