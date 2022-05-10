// src/store/auth/actions.js
import axios from "axios";
import { API_URL } from "../../config";
import { startLoading, userLoggedIn } from "./slice";
// A thunk creator
export const login = (email, password, navigate) => {
  return async function thunk(dispatch, getState) {
    try {
      dispatch(startLoading());

      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });

      const { jwt } = response.data;

      const profileResponse = await axios.get(`${API_URL}/me`, {
        headers: { authorization: `Bearer ${jwt}` },
      });

      localStorage.setItem("token", jwt);

      dispatch(userLoggedIn({ accessToken: jwt, user: profileResponse.data }));
      navigate("/");
    } catch (e) {
      console.log("Error at login", e.message);
    }
  };
};

export const bootstrapLoginState = () => async (dispatch, getState) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) return;

    const response = await axios.get(`${API_URL}/me`, {
      headers: { authorization: `Bearer ${token}` },
    });

    dispatch(userLoggedIn({ accessToken: token, user: response.data }));
  } catch (e) {
    console.log(e.message);
  }
};
