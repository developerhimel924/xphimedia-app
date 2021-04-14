import { AddShoppingCart } from "@material-ui/icons";
import React from "react";
import { useStateValue } from "./StateProvider";
import "./BooksDetails.css";
import {useState} from "react";

function BookDetails({
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
  price1type,
  price2type
}) {
  const [{ basket }, dispatch] = useStateValue();

  const [showMainPrice, setshowMainPrice] = useState(price1);
  const handleShowMainPrice = (event) => {
    setshowMainPrice(Number(event.target.value));
  };
  const [handleprice1type, sethandleprice1type] = useState("");
  const functionhandleprice1type =()=>{
    sethandleprice1type(price1type);
  };
  console.log(handleprice1type);

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: showMainPrice,
        price1type: handleprice1type,
        price2type:price2type,
      },
    });
  };
  return (
    <div className="books__info__container">
      <div className="books__imginfo">
        <img className="books__img" src={image} alt="" />
        <p className="authorP">Follow the author</p>
        <a
          href="http://blog.hebrewnation.us/meet-the-author/"
          target="__blank"
          className="author__target"
        >
          <img className="authorImg" src={authorimage} alt="hello" />
          <p>{author}</p>
        </a>
      </div>
      <div className="books__details__info">
        <h3 className="book__name">{title}</h3>
        <p className="author__name">by {author} (author)</p>
        <div className="details__of__book">
          <p className="formatStyles">Format Styles</p>

          <div class="SelectPrice__Format__div">
              <select
                onClick={handleShowMainPrice}
                class="country__Select"
              >
                <option value={null} selected disabled>
                  Select Format:
                </option>
                <option value={price1}>{price1type}: $ {price1}</option>
                <option value={price2}>{price2type}: $ {price2}</option>
              </select>
            </div>
            {/* <button onClick={functionhandleprice1type}>click me</button> */}
            <p>Selected Price: {showMainPrice}</p>
          <p className="books__description">{booksdetails}</p>
        </div>
      </div>
      <div className="books__cart">
        <p className="preoder__text">{preordertext}</p>
        <p className="select__format__text">Select format in your cart</p>
        <div className="price__list__book">
          <p>
            {price1type}: <span>$ {price1}</span>
          </p>
          <p>
            {price2type} Price: <span>$ {price2}</span>
          </p>
        </div>
        <p className="stock__text">{stock}</p>
        <button type="submit" className="shoppingcart__btn" onClick={addToBasket}>
          <AddShoppingCart />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}

export default BookDetails;
