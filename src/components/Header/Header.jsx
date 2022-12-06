import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import store from "../../app/store";
import { Button, Space, ConfigProvider } from "antd";
import { useDispatch } from "react-redux";
import { logout } from "../Login/loginSlice";

let userLoggedIn = new Boolean();

const Header = () => {
  const [loggedIn, setLogIn] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  store.subscribe(async () => {
    userLoggedIn = store.getState().header.userLogged;
    setLogIn(userLoggedIn);
  });

  useEffect(() => {
    if (localStorage.getItem("JWT")) {
      setLogIn(true);
    }
  });

  return (
    <div
      className="classHeader"
      
      style={{ display: "flex",
      alignItems:"center",
      justifyContent: "flex-start",
      height: "20vh",
      width: "100vw",
      flexFlow:"row",
        backgroundImage: `url("https://static.hidive.com/news/2021/01/hidive-classic-anime-ninja-scroll-movie-1200x450.jpg")`,
      }}
    >
      <Link to="/" className="mangaDesign"
          style={{marginRight:"-5em",
          
          }}
      >
        <img
          className="headerLogo"
          src="https://upload.wikimedia.org/wikipedia/en/9/91/MangoEntertainmentLogo.png"
          alt=""
        />
      </Link>

      {loggedIn === false ? (
        
        <div >
          <Space>
            <Link to="./login">
              <Button className="loginButton button" type="primary">
                Login
              </Button>
            </Link>
            <Link to="./register">
              <Button className="registerButton button" type="primary">
                Register
              </Button>
            </Link>
          </Space>
        </div>
      ) : (
        <div>
          <Space>
            <Link to="../user-area">
              <Button type="primary">User Area</Button>
            </Link>
            <Button
              type="primary"
              // When logout is clicked, state is cleaned, logged in hook is falsified and app is navigated to "/"
              onClick={() => {
                dispatch(logout());
                setLogIn(false);
                navigate("/");
              }}
            >
              Logout
            </Button>
          </Space>
        </div>
      )}
      {loggedIn &&
      JSON.parse(localStorage.getItem("UserInfo")).UserType == "Admin" ? (
        <Link to="../admin-area">
          <Button type="primary" className="adminButton">
            Admin Area
          </Button>
        </Link>
      ) : (
        void 0
      )}
    </div>
  );
};

export default Header;
