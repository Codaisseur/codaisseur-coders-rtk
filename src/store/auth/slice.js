import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  me: null, // the logged-in user
  accessToken: null,
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    userLoggedIn: (state, action) => {
      state.me = action.payload.user;
      state.accessToken = null;
      state.loading = false;
    },
    logout: (state) => {
      localStorage.removeItem("token");
      // when we want to update the whole state
      // we can return a new object instead of updating
      // each key one by one
      return initialState;
    },
  },
});

export const { startLoading, userLoggedIn, logout } = authSlice.actions;

export default authSlice.reducer;
