import axios from 'axios';

var root = 'http://localhost:3000'

export const loginUser = async () => {
    
    let res = await axios.get(`${root}/users/login`);
    
    console.log ("Homo Ex Machina", res);
    
    return res.data.results; 
};

