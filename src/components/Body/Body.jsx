import React from "react";
import "./Body.css";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import Login from "../Login/Login";
import UserArea from "../UserArea/UserArea";
import Register from "../Register/Register";
import Subscriptions from "../Subscriptions/Subscriptions";
import AdminArea from "../AdminArea/AdminArea";

const Body = () => {
  return (
    <div className="classBody">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-area" element={<UserArea />} />
        <Route path="/user-area/subscriptions" element={<Subscriptions />} />
        <Route path="/admin-area" element={<AdminArea />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Body;
