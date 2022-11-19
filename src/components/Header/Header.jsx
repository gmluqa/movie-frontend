import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="classHeader">
      <img
        className="headerLogo"
        src="https://bendblockbuster.com/wp-content/uploads/2019/05/bb-ticket.png"
        alt=""
      />
      <div>
      <Link to="./login">
        <button>login</button>
        </Link>
        <div>register</div>
      </div>
    </div>
  );
};

export default Header;
