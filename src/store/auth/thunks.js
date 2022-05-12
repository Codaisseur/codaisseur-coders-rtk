import axios from "axios";
import { saveToken, startLoading } from "./slice";

import { API_URL } from "../../config";

export const login = (email, password) => async (dispatch, getState) => {
  try {
    // dispatch => set loading to true
    dispatch(startLoading());

    // Make POST to /login
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });

    console.log("login response", response);
    // store it in redux => dispatch something.
    dispatch(saveToken(response.data.jwt));
  } catch (e) {
    console.log(e.message);
  }
};
