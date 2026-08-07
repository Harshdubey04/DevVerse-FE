import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({

    name: "auth",

    initialState: {
        user: null,
        isAuthenticated: false,
        isLoading: true,
    },

    reducers: {
        addUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        removeUser: (state) => {
            state.user = null,
                state.isAuthenticated = false;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    }
})

export const { addUser, removeUser,setLoading } = authSlice.actions;
export default authSlice.reducer;
