import axios from 'axios';

const API_URL = 'http://localhost:3000'

let returnedUser = {}

export let searchUser = async (value) => {

    try {
        await axios.get(`${API_URL}/user/getUserByEmail/email/:Email${value}`).then(response => {
            returnedUser = response
        })
        return returnedUser
    }
    catch (error) {
        returnedMessage = "User Not Found"
        return returnedUser;

    }
};