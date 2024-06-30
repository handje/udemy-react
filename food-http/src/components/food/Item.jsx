import React, { useContext } from "react";

import { Button } from "../commons";
import { CartContext } from "../../store";

const Item = ({ menu }) => {
  const { id, name, price, description, image } = menu;
  const { addFoodCount } = useContext(CartContext);

  return (
    <div className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt="food image" />
        <h3>{name}</h3>
        <div>
          <p className="meal-item-price">{price}</p>
          <p className="meal-item-description">{description}</p>
          <Button
            className="meal-item-actions"
            onClick={() => {
              addFoodCount(id, name, price);
            }}
          >
            Add to Cart
          </Button>
        </div>
      </article>
    </div>
  );
};

export default Item;
