import React, { useState, useEffect } from "react";
import "./SearchRental.css";
import { searchUser } from "../../services/searchRentals.service";
import { motion } from "framer-motion";
import { getAllUserOrders } from "../../services/getAllUserOrders.service";
import { Card } from "antd";
const { Meta } = Card;

const findRental = () => {
  const [rentals, setRentals] = useState([]);

  const rentalsArrayMapper = async () => {
    let rentalsData = await getAllUserOrders();
    let arr = [];
    for (let i = 0; i < rentalsData.data.length; i++) {
      arr.push(rentalsData.data[i]);
    }
    return arr;
  };

  useEffect(() => {
    const promise = rentalsArrayMapper();

    promise.then(data => {
      setRentals(data);
    });
  }, []);

  return (
    <div className="cardsWrapper">
      {rentals.map((item, index) => {
        return (
          <Card
            key={index}
            style={{
              width: 240,
            }}
          >
            <div>{`Order ID: ${item.id}`}</div>
            <div>{`User ID: ${item.User_ID}`}</div>
            <div>{`Article ID: ${item.Product_ID}`}</div>
          </Card>
        );
      })}
    </div>
  );
};

export default findRental;
