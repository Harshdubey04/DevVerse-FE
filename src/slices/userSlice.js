import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
        users:[],
    },
    reducers:{
        setUsers:(state,action)=>{
            state.users=action.payload;
        },
        clearUsers:(state)=>{
            state.users=[]
        },
        removeUserFromFeed:(state,action)=>{
            state.users=state.users.filter((user)=>user._id!==action.payload);
        },
    }
});

export const{setUsers,clearUsers,removeUserFromFeed}=userSlice.actions;
export default userSlice.reducer;

