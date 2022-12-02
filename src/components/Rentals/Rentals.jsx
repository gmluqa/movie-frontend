import { Card } from "antd";
import React, { useState } from "react";
import { render } from "react-dom";
import { getOrders } from "../../services/getUserOrders.service.js";
import { getArticleById } from "../../services/getArticleById.service";
// Retrieves JWT
// Renders all articles user has as cards

const userInfo = JSON.parse(localStorage.getItem("UserInfo"));
const jwt = JSON.parse(localStorage.getItem("JWT"));

const orders = await getOrders(userInfo, jwt);

const orderData = await getArticleById(1);

let articlesArray = [];
const articlesArrayMapper = async () => {
  for (let i = 0; i < orders.data.length; i++) {
    const articleData = await getArticleById(orders.data[i].Product_ID);
    articlesArray.push(articleData.data);
  }
};
articlesArrayMapper();
console.log(articlesArray);

// Just use a hook and connect it to the thing

const Rentals = () => {
  const [articles, setArticles] = useState({});

  {
    /* This ternary checks if the article statehook is empty, if it is, it fills it with the users rentals, else does nothing*/
    Object.entries(articles).length === 0 ? setArticles(orders) : void 0;
  }

  return <></>;
};

export default Rentals;
