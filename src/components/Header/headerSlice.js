import { createSlice } from '@reduxjs/toolkit'
import { login } from "../Login/loginSlice"

const initialState = { userLogged: false }

const headerSlice = createSlice({
    name: "header",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(login, (state, action) => {
            state.userLogged = true
        })
    }
})

export default headerSlice.reducer