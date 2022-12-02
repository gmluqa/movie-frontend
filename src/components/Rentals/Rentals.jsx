import React, { useState } from "react";
import { render } from "react-dom";
import { getOrders } from "../../services/getUserOrders.service.js";

// Retrieves JWT
// Renders all articles user has as cards

const userInfo = JSON.parse(localStorage.getItem("UserInfo"));
const jwt = JSON.parse(localStorage.getItem("JWT"));

const orders = await getOrders(userInfo, jwt);

// Just use a hook and connect it to the thing

const Rentals = () => {
  const [articles, setArticles] = useState({});

  {
    /* This ternary checks if the article statehook is empty, if it is, it fills it with the users rentals, else does nothing*/
    Object.entries(articles).length === 0 ? setArticles(orders) : void 0;
  }

  return <>{articles?.data?.[0]?.Product_ID}</>;
};

export default Rentals;
