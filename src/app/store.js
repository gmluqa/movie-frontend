<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../components/userSlice';

export default configureStore({
    reducer: {
        user: userSlice
    }
    
});
=======
import { configureStore } from "@reduxjs/toolkit"
import registerSlice from "../components/Register/registerSlice"

export default configureStore({
    reducer: {
        register: registerSlice
    }
})
>>>>>>> main
