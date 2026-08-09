import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",

  initialState: {
    user: null,
    isLoading: false,
    error: null,
  },

  reducers: {
    setProfile: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
    },

    setProfileLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    setProfileError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    clearProfile: (state) => {
      state.user = null;
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const {
  setProfile,
  setProfileLoading,
  setProfileError,
  clearProfile,
} = profileSlice.actions;

export default profileSlice.reducer;