import { createSlice } from "@reduxjs/toolkit";

const connectionRequestSlice=createSlice({
    name:"connectionRequest",
    initialState:{
        requests: [],
        isLoading: false,
        error: null,
    },
    reducers:{
        sendRequests:(state,action)=>{
            state.requests=action.payload;
            state.isLoading=false;
            state.error=null;
        },
        clearRequests:(state)=>{
            state.requests=[];
            state.isLoading=false;
            state.error=null;
        },
        setError:(state,action)=>{
            state.error=action.payload;
            state.isLoading=false;
        },
        setLoading:(state,action)=>{
            state.isLoading = action.payload;            
        }
    }
})

export const{sendRequests,clearRequests,setError,setLoading}=connectionRequestSlice.actions;
export default connectionRequestSlice.reducer;