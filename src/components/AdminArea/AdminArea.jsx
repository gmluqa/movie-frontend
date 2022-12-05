import React from "react";
import "./AdminArea.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AdminArea = () => {
  return (
    <div className="adminOptions">
      <Link to="/admin-area/search-user">
        <motion.button

          animate={{ y: 100 }}
          transition={{ duration: 2 }}
          whileHover={{ scale: 1.3 }}
          className="searchEmail"
        >
          Users
        </motion.button>
      </Link>
      <Link to="/admin-area/search-rental">
        <motion.button
          animate={{ y: 100 }}
          transition={{ duration: 2 }}
          whileHover={{ scale: 1.3 }}
          className="searchRentals"
        >
          Get All Rentals
        </motion.button>
      </Link>
    </div>
  );
};

export default AdminArea;
