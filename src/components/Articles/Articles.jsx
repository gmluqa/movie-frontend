import React, { useState, useEffect } from "react";
import { Input } from "antd";
const { TextArea } = Input;

const Articles = () => {
  const [criteria, setCriteria] = useState("");

  const onChange = e => {
    setCriteria(e.target.value);
  };

  useEffect(() => {
    if (criteria !== "") {
      //Voy a aplicar mi proceso de debounce....

      const bring = setTimeout(() => {
        searchFilms(criteria)
          .then(res => {
            //Guardo en RDX
            // dispatch(addSearch({ movies: res.data.results }));
          })
          .catch(error => console.log(error));
      }, 350);

      return () => clearTimeout(bring);
    } else if (criteria === "") {
      //Guardo en RDX pelis vacías...
      //   dispatch(cleanSearch({ movies: [] }));
    }
  }, [criteria]);

  return (
    <>
      <Input
        placeholder="Search for media here..."
        allowClear
        onChange={onChange}
      />
      <div>{criteria}</div>
    </>
  );
};

export default Articles;
