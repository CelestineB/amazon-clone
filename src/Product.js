import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
function Product({ id, title, price, rating, image }) {
  const [{ basket }, displatch] = useStateValue();
  const addToBasket = () => {
    //Add item to basket
    displatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <span>£</span>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span key={Math.random()}>⭐</span>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
