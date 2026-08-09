import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slices/authSlice'
import userReducer from '../slices/userSlice'
import connectionReducer from "../slices/connetionSlice"
import connectionRequestReducer from "../slices/connectionRequestSlice"
import profileReducer from "../slices/profileSlice";

const appStore= configureStore({
  reducer: {
    auth:authReducer,
    user:userReducer,
    connection:connectionReducer,
    connectionRequest:connectionRequestReducer,
    profile: profileReducer,
  },

})

export default appStore;