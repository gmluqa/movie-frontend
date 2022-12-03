import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import store from "../../app/store";
import { Button, Space, ConfigProvider } from "antd";

let userLoggedIn = new Boolean();

const Header = () => {
  const [loggedIn, setLogIn] = useState(false);

  store.subscribe(() => {
    console.log("i changed");
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
      style={{
        backgroundImage: `url("https://static.hidive.com/news/2021/01/hidive-classic-anime-ninja-scroll-movie-1200x450.jpg")`,
      }}
    >
      <img
        className="headerLogo"
        src="https://upload.wikimedia.org/wikipedia/en/9/91/MangoEntertainmentLogo.png"
        alt=""
      />

      {loggedIn === false ? (
        <div>
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
          <Link to="../user-area">
            <button>User Area</button>
          </Link>
          {/*<Link to="./"> */}
          <button>Logout</button>
          {/* </Link> */}
        </div>
      )}
    </div>
  );
};

export default Header;
