import React from "react";

import tempImg from "../../assets/logo.jpg";
import Button from "../commons/Button";

const Item = ({ menu }) => {
  const { name, price, description, image } = menu;
  return (
    <div className="meal-item">
      <article>
        <img src={tempImg} alt="food image" />
        <h3>{name}</h3>
        <div>
          <p className="meal-item-price">{price}</p>
          <p className="meal-item-description">{description}</p>
          <Button className="meal-item-actions">Add to Cart</Button>
        </div>
      </article>
    </div>
  );
};

export default Item;
