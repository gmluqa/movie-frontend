import axios from 'axios';

const API_URL = 'http://localhost:3000'

let returnedMessage = ""
let returnedArticle = {}

export let getAllUserOrders = async () => {
    let JWT = localStorage.getItem("JWT").slice(1, -1)
    console.log(JWT)
    try {
        await axios.get(`${API_URL}/order/listAll`, {
            headers: {
                "auth-token": JWT
            }
        }).then(response => {
            returnedArticle = response
        })
        return returnedArticle
    }
    catch (error) {
        returnedMessage = "Something went wrong..."
        return returnedArticle;

    }
};