import axios from 'axios';

const API_URL = 'http://localhost:3000'

let returnedArticle = {}

export let getArticleById = async (value) => {

    try {
        await axios.get(`${API_URL}/product/articles/id/${value}`).then(response => {
            returnedArticle = response
        })
        return returnedArticle
    }
    catch (error) {
        returnedMessage = "Something went wrong..."
        return returnedArticle;

    }
};