import { AddShoppingCart } from "@material-ui/icons";
import React from "react";
import { useStateValue } from "./StateProvider";
import "./BooksDetails.css";
import { useState } from "react";

function MusicDetails({
  id,
  title,
  image,
  author,
  price1,
  price2,
  booksdetails,
  authorimage,
  preordertext,
  stock,
}) {
  const [{ basket }, dispatch] = useStateValue();

  const [showMainPrice, setshowMainPrice] = useState(price1);
  const handleShowMainPrice = (event) => {
    setshowMainPrice(Number(event.target.value));
  };

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: showMainPrice,
      },
    });
  };

  return (
    <div className="books__info__container">
      <div className="books__imginfo">
        <img className="books__img1" src={image} alt="" />
      </div>
      <div className="books__details__info">
        <h3 className="book__name">{title}</h3>
        <p className="author__name">by {author} (artists)</p>
        <div className="details__of__book">
          <p className="formatStyles">Format Styles</p>

          <div class="SelectPrice__Format__div">
            <select onClick={handleShowMainPrice} class="country__Select">
              <option value={null} selected disabled>
                Select Format:
              </option>
              <option value={price1}>Physical CD: $ {price1}</option>
              <option value={price2}>Download: $ {price2}</option>
            </select>
          </div>
          <p>Selected Price: {showMainPrice}</p>
          <p className="books__description">{booksdetails}</p>
        </div>
      </div>
      <div className="books__cart">
        <p className="preoder__text">{preordertext}</p>
        <p className="select__format__text">Select format in your cart</p>
        <div className="price__list__book">
          <p>
            Physical CD Price: <span>$ {price1}</span>
          </p>
          <p>
            Digtial Download Price: <span>$ {price2}</span>
          </p>
        </div>
        <p className="stock__text">{stock}</p>
        <button className="shoppingcart__btn" onClick={addToBasket}>
          <AddShoppingCart />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}

export default MusicDetails;
