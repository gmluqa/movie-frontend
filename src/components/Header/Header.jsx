import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import store from "../../app/store";

let userLoggedIn = new Boolean();

const Header = () => {
  const [loggedIn, setLogIn] = useState(false);

  store.subscribe(() => {
    console.log("i changed");
    userLoggedIn = store.getState().header.userLogged;
    setLogIn(userLoggedIn);
  });

  return (
    <div className="classHeader">
      <img
        className="headerLogo"
        src="https://bendblockbuster.com/wp-content/uploads/2019/05/bb-ticket.png"
        alt=""
      />

      {loggedIn === false ? (
        <div>
          <Link to="./login">
            <button>login</button>
          </Link>
          <Link to="./register">
            <button>register</button>
          </Link>
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
