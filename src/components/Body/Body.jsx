import React from "react";
import "./Body.css";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";

const Body = () => {
  return (
    <div className="classBody">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<h1>register!!</h1>} />
        <Route path="/login" element={<h1>login!!</h1>} />
        <Route path="/user-area" element={<h1>user-area!!</h1>} />
        <Route path="/admin-area" element={<h1>admin area!!</h1>} />
        <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes>
    </div>
  );
};

export default Body;
