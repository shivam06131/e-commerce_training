import React from "react";
import "./Checkout.css";
import { useSelector } from "react-redux";

const Checkout = () => {
  const { items } = useSelector((state) => state.cartItems);
  let counter = 0;
  const totalAmount = items.map((item) => {
    if (item.count == 1) {
      counter += item.price;
    } else {
      counter += item.price * item.count;
    }
  });
  console.log("counter", counter);
  return (
    <div>
      <div className="checkout_container_root">
        {items.map((data) => {
          const { index, image, name, items, count, price } = data;
          return (
            <div key={index} className="checkout_container">
              <img src={image} alt="img" />
              <h2>{name}</h2>
              <div className="wrapper">
                <h4>{count} items</h4>
                <h4>Cost: {price} $</h4>
              </div>
            </div>
          );
        })}
        <div className="total">
          <h2>Total:- {counter}</h2>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
