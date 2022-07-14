import { createSlice } from "@reduxjs/toolkit";
import { loginEmployee, employeeProfile } from "../ApiCalls/user";

const usersSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    user: null,
    userType: "employee",
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.token = null;
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Login
    builder.addCase(loginEmployee.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginEmployee.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(loginEmployee.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Load Profile
    builder.addCase(employeeProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(employeeProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(employeeProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export const { logout } = usersSlice.actions;

export default usersSlice.reducer;
