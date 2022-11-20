import React from "react";
import "./Body.css";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import Login from "../Login/Login";
<<<<<<< HEAD
import UserArea from "../UserArea/UserArea";
=======
import Register from "../Register/Register"

>>>>>>> f90d571 (Feat: Register-mods)

const Body = () => {
  return (
    <div className="classBody">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-area" element={<UserArea />} />
        <Route path="/admin-area" element={<div>admin area!!</div>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Body;
