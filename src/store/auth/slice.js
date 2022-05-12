import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  token: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    saveLoginData: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      return { ...initialState };
    },
  },
});

export const { startLoading, saveLoginData, logout } = authSlice.actions;

export default authSlice.reducer;
