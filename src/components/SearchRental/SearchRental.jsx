import React, {useState, useEffect} from "react";
import "./SearchRental.css";
import { searchUser} from "../../services/searchRentals.service";
import { Card } from "antd";

const { Meta } = Card;

const findRental = () => {

const [bringallrentals, bringAllrentals] = useState([]);

useEffect (() =>{

  if (bringallrentals.lenght === 0){
    searchUser()
    .then(
      res => {
        bringAllrentals(res)
      }
    )
    .ca
  }

})
  
};

export default findRental;