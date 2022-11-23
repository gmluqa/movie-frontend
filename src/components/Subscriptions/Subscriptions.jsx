import React from "react";
import "./Subscriptions.css";

const Subscriptions = () => {
  return (
    <>
      <div className="promoMessage">Select your ideal plan!</div>
      <div className="plansWrapper">
        <div className="plan">
          <div>plan 1 rentals/month </div>
          <div>plan 1 video quality</div>
          <div>plan 1 Downloads yes/no</div>
          <div>plan 1 price</div>
        </div>
        <div className="plan">
          <div>plan 2 rentals/month </div>
          <div>plan 2 video quality</div>
          <div>plan 2 Downloads yes/no</div>
          <div>plan 2 price</div>
        </div>
        <div className="plan">
          <div>plan 3 rentals/month </div>
          <div>plan 3 video quality</div>
          <div>plan 3 Downloads yes/no</div>
          <div>plan 3 price</div>
        </div>
      </div>
    </>
  );
};

export default Subscriptions;
