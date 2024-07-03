import React, { useEffect, useState } from "react";

import Item from "./Item";
import Error from "../fallback/Error.jsx";
import Loading from "../fallback/Loading.jsx";
import { fetchFoodData } from "../../utils/http.js";
import useHttp from "../../hooks/useHttp.js";

const requestConfig = {};
const FoodList = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [foodList, setFoodList] = useState([]);
  // useEffect(() => {
  //   const fetchFoodList = async () => {
  //     setIsLoading(true);
  //     try {
  //       const data = await fetchFoodData();
  //       setFoodList(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //     setIsLoading(false);
  //   };
  //   fetchFoodList();
  // }, []);
  const {
    data: foodList,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error title="Failed to fetch meals" msg={error} />;
  }
  return (
    <ul id="meals">
      {foodList.map((menu) => (
        <Item key={menu.id} menu={menu}></Item>
      ))}
    </ul>
  );
};

export default FoodList;
