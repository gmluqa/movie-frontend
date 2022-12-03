import axios from 'axios';

const API_URL = 'http://localhost:3000'

let returnedArticles = {}
let returnedMessage = ""

export let getOrders = async (userInfo, jwt) => {

    try {
        await axios.get(`${API_URL}/order/user/${userInfo.id}`, {
            headers: {
                "auth-token": jwt
            }
        }).then(response => {
            returnedArticles = response
        })
        return returnedArticles
    }
    catch (error) {
        returnedMessage = "Something went wrong!"
        return returnedArticles;

    }
};
