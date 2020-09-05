import React from "react";
import { useStateValue } from "./StateProvider";
import "./CheckoutItem.css";
function CheckoutItem({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkout__item" key={Math.random()}>
      <img src={image} alt="" />
      <div className="checkout__itemInfo">
        <p>{title}</p>
        <span>£</span>
        <strong>{price}</strong>
        <p>
          {Array(rating)
            .fill()
            .map((_) => (
              <span key={Math.random()}>⭐</span>
            ))}
        </p>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutItem;
