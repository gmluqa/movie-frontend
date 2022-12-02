import React from "react";
import "./AdminArea.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

const AdminArea = () => {

  return (
    <div className="adminOptions">
      <Link to="/admin-area/search-user">
      <motion.h1 animate = {{ y : 100}} transition = {{duration : 2}} whileHover = {{scale : 1.3}} className = "searchEmail">USERS</motion.h1>
      </Link>
      <Link to="/admin-area/search-rental">
      <motion.h1 animate = {{y : 100}} transition = {{duration : 2}} whileHover = {{scale : 1.3}} className = "searchRentals">RENTALS</motion.h1>
      </Link>
    </div>
  );
};

export default AdminArea;

