import React from "react";
import { Carousel } from "antd";
import "./Home.css";

const Home = () => {
  const contentStyle = {
    margin: 20,
    height: "50vh",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>Contenido 1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Contenido 2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Contenido 3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Contenido 4</h3>
        </div>
      </Carousel>

      <div className="contentParent">
        <div>This is some content</div>
      </div>
      <div className="contentParent">
        <div>This is more content</div>
      </div>
      <div className="contentParent">
        <div>This is more content</div>
      </div>
      <div className="contentParent">
        <div>This is more content</div>
      </div>
      <div className="contentParent">
        <div>This is more content</div>
      </div>
    </>
  );
};

export default Home;
