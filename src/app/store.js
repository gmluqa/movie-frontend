
import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../components/userSlice';

import userReducer from "../components/Login/loginSlice"
import headerReducer from "../components/Header/headerSlice"



export default configureStore({
    reducer: {
        
        user: userReducer,
        header: headerReducer
        
    }
    
});

