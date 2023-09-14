import { configureStore } from "@reduxjs/toolkit";
import { Authentication_reducer } from "./Slices/AuthenticationSlice";
import { User_reducer } from "./Slices/Userslice";
const Store = configureStore({
  reducer: {
    Authentication: Authentication_reducer,
    User: User_reducer,
  },
});
export default Store;
