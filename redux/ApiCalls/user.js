import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const base_URL = "https://boiling-escarpment-76670.herokuapp.com/api/v1/user";

export const loginEmployee = createAsyncThunk(
  "user/loginEmployee",
  async ({ employeeId, password }, { rejectWithValue }) => {
    console.log(employeeId, password);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${base_URL}/login`,
        { employeeId, password },
        config
      );
      console.log(data);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const employeeProfile = createAsyncThunk(
  "user/me",
  async ({ token }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      };
      const data = await axios.get(`${base_URL}/me`, {}, config);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
