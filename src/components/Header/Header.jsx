import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="classHeader">
      <img
        className="headerLogo"
        src="https://bendblockbuster.com/wp-content/uploads/2019/05/bb-ticket.png"
        alt=""
      />
      <div>
        <div>login</div>
        <div>register</div>
      </div>
    </div>
  );
};

export default Header;
