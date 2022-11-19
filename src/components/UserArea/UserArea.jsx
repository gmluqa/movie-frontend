import React from "react";
import { Card } from "antd";
const { Meta } = Card;
import "./UserArea.css";

const UserArea = () => {
  return (
    <div className="cardsParent">
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
    </div>
  );
};

export default UserArea;
