import React, { useContext } from "react";

import { Button } from "../commons";
import { CartContext } from "../../store";
import { currencyFormatter } from "../../utils/formatting";

const Item = ({ menu }) => {
  const { id, name, price, description, image } = menu;
  const { addFoodCount } = useContext(CartContext);

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(price)}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p className="meal-item-actions">
          <Button
            onClick={() => {
              addFoodCount(menu);
            }}
          >
            Add to Cart
          </Button>
        </p>
      </article>
    </li>
  );
};

export default Item;
