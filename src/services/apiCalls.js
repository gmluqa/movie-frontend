import axios from 'axios';

let root = 'http://localhost:3000'

export const loginUser = async () => {
    
    let res = await axios.get(`${root}/users/login`);
    return res.data.results; 
};

export const bringMoviesCarouselTop = async () => {

    let res = await axios.get(`${root}/product/movies/getTopRated`);
    return res.data;
};

export const bringMoviesCarouselLast = async () => {

    let res = await axios.get(`${root}/product/movies/getTopRated`);
    return res.data;
};

export const bringUserbyEmail = async () => {

    let res = await axios.get(`${root}/user/getUserByEmail`);
    return res.data; 
}