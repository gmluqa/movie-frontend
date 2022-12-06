import React, { useState, useEffect } from "react";
import "./Articles.css";
import { Input } from "antd";
const { Search } = Input;
import { searchArticles } from "../../services/searchArticles.service";
import { Card } from "antd";
import { userMakeRental } from "../../services/userMakeRental.service";

const { Meta } = Card;

const renderArticles = () => {
  <div>thing</div>;
};

const Articles = () => {
  const [criteria, setCriteria] = useState("");
  const [results, setResults] = useState({});

  const onChange = e => {
    setCriteria(e.target.value);
  };

  useEffect(() => {

    if (criteria !== "") {
      const bring = setTimeout(() => {
        searchArticles(criteria)
          .then(res => {
            setResults(res);
            return res;
          })
          .catch(error =>(error));
      }, 350);

      return () => clearTimeout(bring);
    } else {
      setResults({});
    }
  }, [criteria]);

  return (
    <>
      <div className="searchWrapper">
        <Search
          className="searchBox"
          placeholder="Search for media here..."
          allowClear
          enterButton="Search"
          size="large"
          onChange={onChange}
          
        ></Search>
      </div>
      <div className="cardsWrapper">
        {results?.data?.[0]?.Name ? (
          <Card
            className="cardComponent"
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={results.data[0].Poster} />}
          >
            <Meta
              title={results.data[0].Name}
              description="www.instagram.com"
            />
            <button onClick={() => userMakeRental(results.data[0].id)}>
              rent
            </button>
          </Card>
        ) : null}
        {results?.data?.[1]?.Name ? (
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={results.data[1].Poster} />}
          >
            <Meta
              title={results.data[1].Name}
              description="www.instagram.com"
            />
            <button onClick={() => userMakeRental(results.data[1].id)}>
              rent
            </button>
          </Card>
        ) : null}
        {results?.data?.[2]?.Name ? (
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={results.data[2].Poster} />}
          >
            <Meta
              title={results.data[2].Name}
              description="www.instagram.com"
            />
            <button onClick={() => userMakeRental(results.data[2].id)}>
              rent
            </button>
          </Card>
        ) : null}
        {results?.data?.[3]?.Name ? (
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={results.data[3].Poster} />}
          >
            <Meta
              title={results.data[3].Name}
              description="www.instagram.com"
            />
            <button onClick={() => userMakeRental(results.data[3].id)}>
              rent
            </button>
          </Card>
        ) : null}

        {results?.data?.[4]?.Name ? (
          <Card
            className="cardComponent"
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={results.data[4].Poster} />}
          >
            <Meta
              title={results.data[4].Name}
              description="www.instagram.com"
            />
            <button onClick={() => userMakeRental(results.data[4].id)}>
              rent
            </button>
          </Card>
        ) : null}
      </div>
    </>
  );
};

export default Articles;
