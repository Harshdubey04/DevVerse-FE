import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slices/authSlice'
import userReducer from '../slices/userSlice'
import connectionReducer from "../slices/connetionSlice"

const appStore= configureStore({
  reducer: {
    auth:authReducer,
    user:userReducer,
    connection:connectionReducer,
  },

})

export default appStore;