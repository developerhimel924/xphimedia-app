import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, hideButton, }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <div className="checkoutproduct__div">
        <img className="checkoutProduct__image" src={image} alt="" />

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <strong className="checkoutPriceText">Price: </strong>
            <strong>$</strong>
            <strong>{price}</strong>
          </p>



          {!hideButton && <button onClick={removeFromBasket}>Remove</button>}
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
