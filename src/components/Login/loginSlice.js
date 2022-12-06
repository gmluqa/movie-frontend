import { createSlice } from '@reduxjs/toolkit'

const initialState = { userJWT: "" }

const loginSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login(state, action) {
            state = action.payload
        },
        logout(state, action) {
            state = action.payload
            localStorage.removeItem("JWT")
            localStorage.removeItem("UserInfo")
        },
    }
})

export const { login, logout } = loginSlice.actions
export default loginSlice.reducer