import React from "react";
import { Card } from "antd";
const { Meta } = Card;
import "./UserArea.css";
import { Link } from "react-router-dom";

const UserArea = () => {
  return (
    <div className="cardsParent">
      <Link to="./rentals" style={{ textDecoration: "none" }}>
        <Card
          hoverable
          onClick={() =>
            console.log("this button renders /user-area/rentals view")
          }
          style={{ width: 240 }}
          cover={
            <img
              alt="My rentals"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
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
              alt="Make a rental"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              height={"200vh"}
            />
          }
        >
          <Meta title="Make a rental" description="" />
        </Card>
      </Link>
      <Link to="./subscriptions" style={{ textDecoration: "none" }}>
        <Card
          hoverable
          onClick={() => console.log("this button renders /subscriptions view")}
          style={{ width: 240 }}
          cover={
            <img
              alt="Choose a subscription"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              height={"200vh"}
            />
          }
        >
          <Meta title="Choose a subscription" description="" />
        </Card>
      </Link>
    </div>
  );
};

export default UserArea;
