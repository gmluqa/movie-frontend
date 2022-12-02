import React, {useState, useEffect} from "react";
import "./SearchRental.css";
import { Input } from "antd";
const { Search } = Input;
import { searchUser} from "../../services/searchRentals.service";
import { Card } from "antd";

const { Meta } = Card;

const findRental = () => {
  const [criteria, setCriteria] = useState("");
  const [results, setResults] = useState({});

  const onChange = e => {
    setCriteria(e.target.value);
  };

  useEffect(() => {
    console.log(results?.data);
    if (criteria !== "") {
      const bring = setTimeout(() => {
        searchUser(criteria)
          .then(res => {
            setResults(res);
            return res;
          })
          .catch(error => console.log(error));
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
          loading
        ></Search>
      </div>
      <div className="cardsWrapper">
        {results?.data?.[0]?.Order ? (
          <Card
            className="cardComponent"
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={results.data[0].Product} />}
          >
            <Meta
              title={results.data[0].Name}
              description="www.instagram.com"
            />
            <button>rent</button>
          </Card>
        ) : null}
        {results?.data?.[1]?.Order ? (
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={results.data[1].Product} />}
          >
            <Meta
              title={results.data[1].Name}
              description="www.instagram.com"
            />
            <button>rent</button>
          </Card>
        ) : null}
        {results?.data?.[2]?.Order ? (
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={results.data[2].Product} />}
          >
            <Meta
              title={results.data[2].Name}
              description="www.instagram.com"
            />
            <button>rent</button>
          </Card>
        ) : null}
        {results?.data?.[3]?.Order ? (
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={results.data[3].Product} />}
          >
            <Meta
              title={results.data[3].Name}
              description="www.instagram.com"
            />
            <button>rent</button>
          </Card>
        ) : null}

        {results?.data?.[4]?.Order ? (
          <Card
            className="cardComponent"
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={results.data[4].Product} />}
          >
            <Meta
              title={results.data[4].Name}
              description="www.instagram.com"
            />
            <button>rent</button>
          </Card>
        ) : null}
      </div>
    </>
  );
};

export default findRental;