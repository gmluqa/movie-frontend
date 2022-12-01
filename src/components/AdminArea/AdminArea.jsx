import React from "react";
import "./AdminArea.css";
import { Link } from "react-router-dom";
// import "../Header/Header";
// import { Button, Space, ConfigProvider} from 'antd';


import { motion } from "framer-motion"

const AdminArea = () => {

  return (
    <div className="adminOptions">
       <Link to="/admin-area/search-user">
      <motion.h1 animate = {{ y : 100}} transition ={{duration : 2}} className = "searchEmail">USERS</motion.h1>
      </Link>
      <Link to="/admin-area/search-rental">
      <motion.h1 animate= {{y:100}} transition ={{duration : 2}} className="searchRentals">RENTALS</motion.h1>
      </Link>
    </div>
  );
};

export default AdminArea;

{/* <Space>
          <Link to="./login">
            <Button className="loginButton button"  type="primary">Login</Button>
          </Link>
          </Space> */}
