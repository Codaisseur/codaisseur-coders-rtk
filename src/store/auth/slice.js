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
    saveToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { startLoading, saveToken } = authSlice.actions;

export default authSlice.reducer;
