import { configureStore } from "@reduxjs/toolkit"
import registerSlice from "../components/Register/registerSlice"

export default configureStore({
    reducer: {
        register: registerSlice
    }
})