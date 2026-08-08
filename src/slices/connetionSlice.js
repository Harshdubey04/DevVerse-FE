import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
    name: "connection",
    initialState: {
        connections:[],
        isLoading: false,
        error: null,
    },
    reducers: {
      setConnections: (state, action) => {
      state.connections = action.payload;
      state.isLoading = false;
      state.error = null;
    },

    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    clearConnections: (state) => {
      state.connections = [];
      state.error = null;
    },
    }
})

export const{setConnections,clearConnections,setError,setLoading}=connectionSlice.actions;
export default connectionSlice.reducer;