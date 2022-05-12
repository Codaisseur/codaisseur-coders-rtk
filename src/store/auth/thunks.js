import axios from "axios";
import { saveLoginData, startLoading } from "./slice";

import { API_URL } from "../../config";

export const login =
  (email, password, navigate) => async (dispatch, getState) => {
    try {
      // dispatch => set loading to true
      dispatch(startLoading());

      // Make POST to /login
      const response = axios.post(`${API_URL}/login`, {
        email,
        password,
      });

      const token = response.data.jwt;

      const profileResponse = axios.get(`${API_URL}/me`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      navigate("/");

      console.log("me response", profileResponse.data);
      // store it in redux => dispatch something.

      dispatch(saveLoginData({ token, user: profileResponse.data }));
    } catch (e) {
      console.log(e.message);
    }
  };
