import axios from 'axios';

const API_URL = 'http://localhost:3000'

let returnedMessage = ""

export let registerUser = async (values) => {

    try {
        await axios.post(`${API_URL}/user/register`, {
<<<<<<< HEAD
            "FirstName": values.nickname,
            "LastName": values.nickname,
=======
            "FirstName": "",
            "LastName": "",
>>>>>>> main
            "Email": values.email,
            "Password": values.password
        }).then(response => {
            returnedMessage = response.data.message
        })
        return returnedMessage
    }
    catch (error) {
        returnedMessage = "This email has been registered already."
        return returnedMessage
    }
};

