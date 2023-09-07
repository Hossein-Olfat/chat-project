import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "User",
  initialState: {
    token: null,
    userinfos: {},
    isloggedin: false,
  },
  Signin: (state, action) => {},
  Signup: (state, action) => {},
});
