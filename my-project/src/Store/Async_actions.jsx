import { createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../Supabase/Supabase";
// Login
const User_Login = createAsyncThunk(
  "user/Login",
  async (userinfo, thunkapi) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: userinfo.email[0],
      password: userinfo.password[0],
    });
    return [data.session.user, error];
  }
);
const User_Register = createAsyncThunk(
  "user/Regiter",
  async (userinfo, thunkapi) => {
    const { data, error } = await supabase.auth.signUp({
      email: userinfo.email[0],
      password: userinfo.password[0],
      options: {
        data: {
          name: userinfo.name[0],
        },
      },
    });
    return [data.user, error];
  }
);
const User_Logout = createAsyncThunk(
  "user/Logout",
  async (userinfo, thunkapi) => {
    const { data, error } = await supabase.auth.signOut();
    console.log(data);
    return [data, error];
  }
);
export { User_Login, User_Register, User_Logout };
