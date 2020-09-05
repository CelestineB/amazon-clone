import React from "react";

import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutItem from "./CheckoutItem";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <h2>Your Shopping Basket{!basket.length ? " is empty" : ""}</h2>
      <hr />
      {basket.map((item) => (
        <div className="checkout__body" key={Math.random()}>
          <CheckoutItem
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        </div>
      ))}
    </div>
  );
}

export default Checkout;
