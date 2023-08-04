import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: null,
    userId:null,
    email:null,
    loading: false,
    error: false,
    isAdmin: false,
    token: null,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.username;
      state.email = payload?.email;
      state.userId = payload?._id;
      state.isAdmin = payload?.isAdmin;
      state.token = payload?.accessToken;
      state.error = false;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
      state.email = null;
      state.userId = null;
      state.isAdmin = null;
      state.token = null;
      state.error = false;
    },
    // registerSuccess: (state, { payload }) => {
    //   state.loading = false;
    //   state.currentUser = payload?.username;
    //   state.token = payload?.token;
    //   state.error = false;
    // },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  fetchFail,
} = authSlice.actions;
export default authSlice.reducer;
