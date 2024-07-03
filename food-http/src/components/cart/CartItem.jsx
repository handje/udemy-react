import { currencyFormatter } from "../../utils/formatting";
import { CartContext } from "../../store";
import { useContext } from "react";

const CartItem = ({ item }) => {
  const { addFoodCount, removeFoodCount } = useContext(CartContext);

  return (
    <li className="cart-item">
      <p>
        {item.name}-{item.quantity} x {currencyFormatter.format(item.price)}
      </p>
      <p className="cart-item-actions">
        <button
          onClick={() => {
            removeFoodCount(item.id);
          }}
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() => {
            addFoodCount(item);
          }}
        >
          +
        </button>
      </p>
    </li>
  );
};

export default CartItem;
