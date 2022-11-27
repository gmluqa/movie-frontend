import React, {useState, useEffect} from "react";
import { bringMoviesCarouselTop, bringMoviesCarouselLast } from "../../services/apiCalls";
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

  const [moviesCarouselTop, setMoviesCarouselTop] = useState([]);
  const [moviesCarouselLast, setMoviesCarouselLast] = useState([]);

  useEffect(()=>{

    if(moviesCarouselTop.length === 0){

      bringMoviesCarouselTop()
        .then(
          res => {
           
            setMoviesCarouselTop(res)
          }
        )
        .catch(error => console.log(error));
    } else {
      console.log("hello G", moviesCarouselTop)
    }

  },[moviesCarouselTop])

  useEffect(()=>{

    if(moviesCarouselLast.length === 0){

      bringMoviesCarouselLast()
        .then(
          res => {
           
            setMoviesCarouselLast(res)
          }
        )
        .catch(error => console.log(error));
    } else {
    }

  },[moviesCarouselLast])

  return (
    <>

    {
      moviesCarouselTop.length > 0 &&

      <Carousel autoplay>

        {
          moviesCarouselTop.slice(0,5).map(
            movie => {
              return(
                <div key={movie.id}>
                  <h3 style={contentStyle}><img className='posterDesign' src={movie.Poster} alt={movie.id}/></h3>
                </div>
              )
            }
          )
        }
        
      </Carousel>

    }

    {
      moviesCarouselLast.length > 0 &&

      <Carousel autoplay>

        {
          moviesCarouselLast.slice(0,3).map(
            movie => {
              return(
                <div key={movie.id}>
                  <h3 style={contentStyle}><img className='posterDesign' src={movie.Poster} alt={movie.id}/></h3>
                </div>
              )
            }
          )
        }
        
      </Carousel>
    }
      

      {/* <div className="contentParent">
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
      </div> */}
    </>
  );
};

export default Home;
