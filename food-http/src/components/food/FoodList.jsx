import React, { useEffect, useState } from "react";

import Item from "./Item";
import { fetchFoodData } from "../../utils/http.js";

const FoodList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [foodList, setFoodList] = useState([]);
  console.log("main");
  useEffect(() => {
    const fetchFoodList = async () => {
      setIsLoading(true);
      try {
        const data = await fetchFoodData();
        setFoodList(data);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    fetchFoodList();
  }, []);

  if (isLoading) {
    return <p>loading,,,</p>;
  }
  return (
    <div id="meals">
      {foodList.map((menu) => (
        <Item key={menu.id} menu={menu}></Item>
      ))}
    </div>
  );
};

export default FoodList;
