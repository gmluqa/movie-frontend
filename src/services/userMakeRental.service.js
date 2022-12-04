import axios from 'axios';

const API_URL = 'http://localhost:3000'

let returnedMessage = ""
// JWT is obtained from local storage, the whole string containts " at the begginging and end, both of these are sliced out
let JWT = localStorage.getItem("JWT").slice(1, -1)

export let userMakeRental = async (values) => {

    try {
        await axios.post(`${API_URL}/order/newOrder`, {
            "Product_ID": values
        }, {
            headers: {
                "auth-token": JWT
            }
        }).then(response => {
            returnedMessage = response.data.message
        })
        return returnedMessage
    }
    catch (error) {
        returnedMessage = "Something went wrong!"
        return returnedMessage
    }
};