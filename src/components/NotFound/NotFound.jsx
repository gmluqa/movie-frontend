import React from "react";
import "./NotFound.css";

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="notFound">
        <div>Error 404, aww shucks.</div>
        <div>The requested URL: {window.location.href} does not exist 😲</div>
        <Link to="./">
          <button>Take me back to safety</button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
