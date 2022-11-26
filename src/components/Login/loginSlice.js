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
    }
})

export const { login } = loginSlice.actions
export default loginSlice.reducer