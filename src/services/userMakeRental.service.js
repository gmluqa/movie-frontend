import axios from 'axios';

const API_URL = 'http://localhost:3000'

let returnedMessage = ""
// JWT is obtained from local storage, 
let JWT = localStorage.getItem("JWT")

// Does the JWT exist? if yes, the " " at beginging and end are sliced out, if not, continue as normal 
JWT ? JWT.slice(1, -1) : void (0)

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