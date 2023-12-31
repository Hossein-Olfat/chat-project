import { createSlice, current } from "@reduxjs/toolkit";
import Validicationform from "../../Validication_form/Validication_form";
import { User_Login, User_Register } from "../Async_actions";
const AuthenticationSlice = createSlice({
  name: "Authentication",
  initialState: {
    email: [
      "",
      {
        error_status: true,
        error_text: "please fill email input",
        show_error: false,
      },
    ],
    password: [
      "",
      {
        error_status: true,
        error_text: [
          {
            id: 0,
            text: "please fill password input",
            error: true,
          },
          [
            {
              id: 1,
              text: "Lowercase letter",
              error: false,
            },
            {
              id: 2,
              text: "Uppercase letter",
              error: false,
            },
            {
              id: 3,
              text: "Number character",
              error: false,
            },
            {
              id: 4,
              text: "Special character",
              error: false,
            },
            {
              id: 5,
              text: "Minimum password length is 8 character",
              error: false,
            },
            {
              id: 6,
              text: "Maximum password length is 20 character",
              error: false,
            },
          ],
        ],
        show_error: false,
      },
    ],
    name: [
      "",
      {
        error_status: true,
        error_text: "please fill name input",
        show_error: false,
      },
    ],

    visibility_password: false,
  },
  reducers: {
    Email_Filled: {
      reducer: (state, action) => {
        state.email[0] = action.payload;

        Validicationform("email", state);
      },
      prepare: (value) => {
        return { payload: value };
      },
    },
    Password_Filled: {
      reducer: (state, action) => {
        state.password[0] = action.payload;

        Validicationform("password", state);
      },
      prepare: (value) => {
        return { payload: value };
      },
    },
    Name_Filled: {
      reducer: (state, action) => {
        state.name[0] = action.payload;
        Validicationform("name", state);
      },
      prepare: (value) => {
        return { payload: value.trimStart() };
      },
    },
    Show_error: {
      reducer: (state, action) => {
        const _state = { ...state };
        console.log(_state);
        for (let key in _state) {
          if (
            key !== "email" &&
            key !== "password" &&
            key !== (action.payload === "Login" ? null : "name")
          ) {
            console.log("we dont compute this state");
          } else if (_state[key][1].error_status === true) {
            _state[key][1].show_error = true;
          } else {
            _state[key][1].show_error = false;
          }
        }
      },
      prepare: (value) => {
        return { payload: value };
      },
    },
    Visible_password: (state) => {
      state.visibility_password = !state.visibility_password;
    },
  },
  extraReducers: (build) => {
    build.addCase(User_Login.fulfilled, (state, action) => {
      state.password[0] = "";
      state.email[0] = "";
    }),
      build.addCase(User_Register.fulfilled, (state, action) => {
        state.email[0] = "";
        state.password[0] = "";
        state.name[0] = "";
      });
  },
});
const {
  actions: Authentication_actions,
  reducer: Authentication_reducer,
  getInitialState: Authentication_initialState,
} = AuthenticationSlice;

export {
  Authentication_actions,
  Authentication_reducer,
  Authentication_initialState,
};
