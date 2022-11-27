import { createSlice } from '@reduxjs/toolkit'

const initialState = { userJWT: "" }

const loginSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login(state, action) {
            console.log("store updating...")
            console.log(action.payload)
            state = action.payload
        },
        logout(state, action) {
            console.log("store updating...")
            console.log(action.payload)
            state = action.payload
        },
    }
})

export const { login, logout } = loginSlice.actions
export default loginSlice.reducer