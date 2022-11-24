import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../components/userSlice';

export default configureStore({
    reducer: {
        user: userSlice
    }
    
});