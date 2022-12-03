import React, {useState, useEffect} from "react";
import "./SearchRental.css";
import { searchUser} from "../../services/searchRentals.service";
import { Card } from "antd";
import { motion } from "framer-motion";

const { Meta } = Card;

const findRental = () => {

const [bringallrentals, allrentals] = useState([]);
const [magicmotion, setTheMagic] = useState(false);
useEffect (() =>{

  if (bringallrentals.lenght === 0){
    searchUser()
    .then(
      res => {
        allrentals(res)
      }
    )
    .catch(error)
  }else {
    console.log('so what',bringallrentals)
  }

},[bringallrentals])
  
return (

  <div className="allUserDesign">
   <motion.div onClick={() => setTheMagic(!magicmotion)} className="allUserCard">
      <motion.h2> user Card name</motion.h2>
      {magicmotion && ( 
    <motion.div>
    <p>aqui vendria el email</p>
    <p>aqui sus alquileres</p>
    <p>aqui su rol</p>
  </motion.div>
      )}
</motion.div>
    
  </div>
)

};

export default findRental;