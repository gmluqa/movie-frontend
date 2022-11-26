import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../components/Login/loginSlice"
import headerReducer from "../components/Header/headerSlice"


export default configureStore({
    reducer: {
        user: userReducer,
        header: headerReducer
    }
})

