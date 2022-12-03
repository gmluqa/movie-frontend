import axios from "axios";

const API_URL = 'http://localhost:3000'

let returnedRental = {}

export let searchUser = async (value) => {

    try {
        await axios.get(`${API_URL}order/listAll${value}`).then(response => {
            returnedRental = response
        })
        return returnedRental
    }
    catch (error) {
        returnedMessage = "User Not Found"
        return returnedRental;

    }
};