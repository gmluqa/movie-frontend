import React, {useState, useEffect} from "react";
import "./SearchUser.css";
import { Input } from "antd";
const { Search } = Input;
import { searchUser } from "../../services/searchUser.service";
import { Card } from "antd";

const { Meta } = Card;

const findUser = () => {
  const [criteria, setCriteria] = useState("");
  const [results, setResults] = useState({});

  const onChange = e => {
    setCriteria(e.target.value);
  };

  useEffect(() => {
    
    if (criteria !== "") {
      const bring = setTimeout(() => {
        searchUser(criteria)
          .then(res => {
            setResults(res);
            return res;
          })
          .catch(error => (error));
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
        {results?.data?.[0]?.User ? (
          <Card
            className="cardComponent"
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={results.data[0].Name} />}
          >
            <Meta
              title={results.data[0].Email}
              description="www.instagram.com"
            />
            <button>rent</button>
          </Card>
        ) : null}
        {results?.data?.[1]?.User ? (
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={results.data[1].Name} />}
          >
            <Meta
              title={results.data[1].Name}
              description="www.instagram.com"
            />
            <button>rent</button>
          </Card>
        ) : null}
        {results?.data?.[2]?.User ? (
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
            <button>rent</button>
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
            <button>rent</button>
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
            <button>rent</button>
          </Card>
        ) : null}
      </div>
    </>
  );
};

export default findUser;
