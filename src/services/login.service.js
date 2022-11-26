import axios from 'axios';

const API_URL = 'http://localhost:3000'

let returnedMessage = ""

export let loginUser = async (values) => {

    try {
        await axios.post(`${API_URL}/user/login`, {
            "Email": values.email,
            "Password": values.password
        }).then(response => {
            returnedMessage = response.data
        })
        return returnedMessage
    }
    catch (error) {
        returnedMessage = "Invalid E-mail or password."
        return returnedMessage
    }
};

