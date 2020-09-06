import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import "./SubTotal.css";
function SubTotal() {
  const [{ basket }] = useStateValue();
  return (
    <div className="subTotal">
      <CurrencyFormat
        renderText={(value) => (
          <h2>
            Subtotal({basket.length} items):
            {value}
          </h2>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"£"}
      />
      <div className="subtotal__gift">
        <input type="checkbox" />
        <p>Does it contian a gift card?</p>
      </div>

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default SubTotal;
