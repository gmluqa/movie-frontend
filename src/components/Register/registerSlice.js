import { createSlice } from '@reduxjs/toolkit'

export const registerSlice = createSlice({
    name: 'register',
    initialState: {
        email: "",
        password: "",
        nickname: ""
    },

    reducers: {
        submitPayload: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        }
    }
})

export const { submitPayload } = registerSlice.actions

export const registerData = (state) => state.register

export default registerSlice.reducer