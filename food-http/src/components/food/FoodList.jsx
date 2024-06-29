import React from "react";
import Item from "./Item";

const dummy = [
  {
    id: "m1",
    name: "Mac & Cheese",
    price: "8.99",
    description:
      "Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.",
    image: "images/mac-and-cheese.jpg",
  },
  {
    id: "m2",
    name: "Margherita Pizza",
    price: "12.99",
    description:
      "A classic pizza with fresh mozzarella, tomatoes, and basil on a thin and crispy crust.",
    image: "images/margherita-pizza.jpg",
  },
];

const FoodList = () => {
  return (
    <div id="meals">
      {dummy.map((menu) => (
        <Item key={menu.id} menu={menu}></Item>
      ))}
    </div>
  );
};

export default FoodList;
