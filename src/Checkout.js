import React from "react";

import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutItem from "./CheckoutItem";
import SubTotal from "./SubTotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  const subTotal = () => {
    let total = 0;
    basket.reduce((a, b) => {
      total = a.price + b.price;
      return total;
    });
  };
  return (
    <div className="checkout">
      <div className="checkout__boxOne">
        <div className="checkout__ads">
          <img
            src="https://image.shutterstock.com/image-vector/elegant-perfume-glass-bottle-ads-600w-1522557362.jpg"
            alt=""
          />
        </div>
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
      <SubTotal />
    </div>
  );
}

export default Checkout;
