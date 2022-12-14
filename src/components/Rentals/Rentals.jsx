import { Card } from "antd";
import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { getOrders } from "../../services/getUserOrders.service.js";
import { getArticleById } from "../../services/getArticleById.service";
const { Meta } = Card;
import "../Articles/Articles.css";
// Retrieves JWT
// Renders all articles user has as cards

const userInfo = JSON.parse(localStorage.getItem("UserInfo"));
const jwt = JSON.parse(localStorage.getItem("JWT"));

const articlesArrayMapper = async () => {
  let orders = await getOrders(userInfo, jwt);
  let arr = [];
  for (let i = 0; i < orders.data.length; i++) {
    const articleData = await getArticleById(orders.data[i].Product_ID);

    arr.push(articleData.data);
  }
  ;
  return arr;
};
// Just use a hook and connect it to the thing

const Rentals = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles([]);
   
    // On mount, state hook 'articles' array is filled with all movies
    const promise = articlesArrayMapper();

    promise.then(data => {
      setArticles(data);
      
    });
   
  }, []);

  return (
    <div className="cardsWrapper">
      {articles.map((item, index) => {
        return (
          <Card
            key={index}
            className="cardComponent"
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt={item.Name} src={item.Poster} />}
          >
            <Meta title={item.Name} description={item.Genre} />
          </Card>
        );
      })}
    </div>
  );
};

export default Rentals;
