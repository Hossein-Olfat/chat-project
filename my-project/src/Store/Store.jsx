import { configureStore } from "@reduxjs/toolkit";
import { Authentication_reducer } from "./Slices/AuthenticationSlice";
const Store = configureStore({
  reducer: {
    Authentication: Authentication_reducer,
  },
});
export default Store;
