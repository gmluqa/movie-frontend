import axios from 'axios';

const API_URL = 'http://localhost:3000'

let returnedArticles = {}

export let searchArticles = async (value) => {

    try {
        await axios.get(`${API_URL}/product/articles/name/${value}`).then(response => {
            returnedArticles = response
        })
        return returnedArticles
    }
    catch (error) {
        returnedMessage = "This email has been registered already."
        return returnedArticles;

    }
};