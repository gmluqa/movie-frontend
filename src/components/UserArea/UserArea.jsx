import React from "react";
import { Card } from "antd";
const { Meta } = Card;
import "./UserArea.css";
import { Link } from "react-router-dom";


const UserArea = () => {
  return (
    <div className="cardsParent">
      <Link to="./rentals" style={{ textDecoration: "none"}}>
        <Card
          hoverable
          onClick={() =>
            console.log("this button renders /user-area/rentals view")
          }
          style={{ width: 240 }}
          cover={
            <img
              style={{width:"17.3em", height: "20em"}}
              alt="My rentals"
              src="https://pm1.narvii.com/7481/46b8b1fd05e76c95385332ba3d41aa64f9b72576r1-900-1179v2_hq.jpg"
              height={"200vh"}
            />
          }
        >
          <Meta title="My rentals" description="" />
        </Card>
      </Link>
      <Link to="./articles" style={{ textDecoration: "none" }}>
        <Card
          
          hoverable
          onClick={() => console.log("this button renders /articles view")}
          style={{ width: 240 }}
          cover={
            <img
            style={{width:"17.3em", height: "20em"}}
              alt="Make a rental"
              src="https://pm1.narvii.com/7481/2da09b2730ab8a36a0d8ff835cd2418da76ddc29r1-900-1163v2_hq.jpg"
              height={"200vh"}
            />
          }
        >
          <Meta title="Make a rental" description="" />
        </Card>
      </Link>
     
    </div>
  );
};

export default UserArea;
