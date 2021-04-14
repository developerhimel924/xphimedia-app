import React from "react";
import "./Jesus.css";

function Jesus({ title, image, price, }) {
  return (
    <div className="jesus__container">
      <div className="jesus__info">
        <img src={image} alt="" />
        <p>{title}</p>
        <p className="jesus__des">
          <strong>$</strong>
          <strong>{price}</strong>
        </p>
      </div>
    </div>
  );
}

export default Jesus;
