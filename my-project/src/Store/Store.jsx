import { configureStore } from "@reduxjs/toolkit";
import { Login_reducer } from "./Slices/LoginSlice";
const Store = configureStore({
  reducer: {
    login: Login_reducer,
  },
});
export default Store;
