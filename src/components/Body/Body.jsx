import React from "react";
import "./Body.css";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";

const Body = () => {
  return (
    <div className="classBody">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<div>register!!</div>} />
        <Route path="/login" element={<div>login!!</div>} />
        <Route path="/user-area" element={<div>user-area!!</div>} />
        <Route path="/admin-area" element={<div>admin area!!</div>} />
        <Route path="*" element={<div>404 page not found</div>} />
      </Routes>
    </div>
  );
};

export default Body;
