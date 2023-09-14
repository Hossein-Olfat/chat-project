import { createSlice } from "@reduxjs/toolkit";
import { User_Login, User_Register, User_Logout } from "../Async_actions";
const UserSlice = createSlice({
  name: "User",
  initialState: {
    userinfo: "Loading",
    Signup: false,
    Login: false,
    Loading: false,
    show_ConfirmLink_message: false,
    LoginError: {
      error_status: false,
      error_text: "",
    },
    RegisterError: {
      error_status: false,
      error_text: "",
    },
    LogoutError: {
      error_status: false,
      error_text: "",
    },
  },
  reducers: {
    Inituserdata: (state, action) => {
      state.userinfo = action.payload;
    },
    Reset_ConfirmLink_message: (state) => {
      state.show_ConfirmLink_message = false;
    },
    Reset_LoginError: (state) => {
      state.LogoutError.error_status = false;
      state.LoginError.error_text = "";
    },
    Reset_RegisterError: (state) => {
      state.RegisterError.error_status = false;
      state.RegisterError.error_text = "";
    },
    Reset_LogoutError: (state) => {
      state.LogoutError.error_status = false;
      state.LogoutError.error_text = "";
    },
    Loading_Logout: (state) => {
      state.userinfo = "Loading";
    },
  },
  extraReducers: (build) => {
    build.addCase(User_Login.pending, (state, action) => {
      state.Loading = true;
    }),
      build.addCase(User_Login.fulfilled, (state, action) => {
        state.userinfo = action.payload[0];
        state.Loading = false;
        state.Login = true;
      }),
      build.addCase(User_Login.rejected, (state, action) => {
        state.Loading = false;
        state.LoginError.error_status = true;
        state.LoginError.error_text = action.payload[1];
      });
    build.addCase(User_Register.pending, (state, action) => {
      state.show_ConfirmLink_message = true;
      state.Loading = true;
    }),
      build.addCase(User_Register.fulfilled, (state, action) => {
        state.Loading = false;
        state.Signup = true;
      }),
      build.addCase(User_Logout.fulfilled, (state, action) => {
        state.userinfo = null;
      });
  },
});
const {
  actions: User_actions,
  reducer: User_reducer,
  getInitialState: User_initialState,
} = UserSlice;

export { User_actions, User_reducer, User_initialState };
