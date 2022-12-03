import React, {useState, useEffect} from "react";
import "./SearchRental.css";
import { searchUser} from "../../services/searchRentals.service";
import { motion } from "framer-motion";



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
     
   <motion.div transition=
   
   {{layout:{duration: 1}}}
   layout onClick={() => setTheMagic(!magicmotion)} 
   style={{borderRadius:'1rem', boxShadow: '0px 10px 30px rgba(0,255,0,0.8)'}}
   className="allUserCard">
    <motion.h2 layout="position"> rented movie name</motion.h2>
      
      {magicmotion && ( 
      
      <motion.div className="rentalFields">
      
      <p>picture</p>
      <p>users email</p>
      <button>go</button>
      </motion.div>
      
      )}
   
    </motion.div>

  </div>
)

};

export default findRental;