import { useDispatch, useSelector } from "react-redux";
import { Authentication_actions } from "../../Store/Slices/AuthenticationSlice";
import { Link } from "react-router-dom";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
import { useRef } from "react";
import supabase from "../../Supabase/Supabase";

function AuthenticationBox({ type }) {
  const AuthState = useSelector((state) => {
    return state.Authentication;
  });
  const AuthStateValues = Object.values(AuthState);
  const form_status = (type) => {
    return !AuthStateValues.some((value, index) => {
      if (typeof value !== "boolean") {
        if (type === "Login" && index !== 2) {
          return value[1].error_status === true;
        } else if (type === "Register") {
          return value[1].error_status === true;
        }
      }
    });
  };
  console.log(form_status("Login"));
  const dispatch = useDispatch();
  const password_errors = AuthState.password[1].error_text[1].filter((Each) => {
    return Each.error === true;
  });

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className=" w-96 bg-white rounded-xl px-7 mx-2 py-[1.3rem] flex flex-col gap-4">
        <div
          className={` justify-center bg-green-600 text-white py-1 rounded-md ${
            AuthState.isSent_register === true && type === "Register"
              ? "flex"
              : "hidden"
          }`}
        >
          <div className=" text-center">
            {" "}
            we send a confirm link to your email
          </div>
        </div>
        <div className=" flex flex-col items-center gap-2">
          <h1 className=" text-4xl text-gray-700 font-semibold">chat app</h1>
          <span className="">{type === "Login" ? "Login" : "Register"}</span>
        </div>

        <form className=" flex flex-col justify-center items-center gap-4 relative">
          {type === "Register" ? (
            <div className="w-full flex flex-col gap-1">
              <div className=" w-full relative flex justify-center">
                <input
                  disabled={AuthState.Loading === true ? true : false}
                  onKeyDown={(e) => {
                    (/[^A-za-z ]/g.test(e.key) || e.code === "Backslash") &&
                      e.preventDefault();
                  }}
                  value={AuthState.name[0]}
                  onChange={(e) => {
                    dispatch(
                      Authentication_actions.Name_Filled(e.target.value)
                    );
                    console.log(AuthState);
                  }}
                  type="text"
                  placeholder="name"
                  className={`peer border-solid ${
                    AuthState.name[1].show_error === true
                      ? " border-red-600 border-b-2"
                      : " border-gray-600 border-b-[1px]"
                  }
                placeholder:text-base p-3`}
                />
                <div
                  className={`absolute bottom-0 w-0 h-[2px] peer-focus:w-full transition-all duration-300 ${
                    AuthState.name[1].show_error === true
                      ? "bg-red-600"
                      : "bg-blue-600"
                  }`}
                ></div>
              </div>
              <div
                className={`text-red-600 font-semibold transition-[font-size] ${
                  AuthState.name[1].show_error === true
                    ? "text-sm"
                    : "text-[0rem]"
                }`}
              >
                {AuthState.name[1].error_text}
              </div>
            </div>
          ) : (
            ""
          )}

          {/** ////////////////////////////////////////////////////////////*/}
          <div className="w-full flex flex-col gap-1">
            <div className=" w-full relative flex justify-center">
              <input
                disabled={AuthState.Loading === true ? true : false}
                onKeyDown={(e) => {
                  /\s/g.test(e.key) && e.preventDefault();
                }}
                type="email"
                placeholder="email"
                className={`peer border-solid ${
                  AuthState.email[1].show_error === true
                    ? " border-red-600 border-b-2"
                    : " border-gray-600 border-b-[1px]"
                } placeholder:text-base p-3`}
                value={AuthState.email[0]}
                onChange={(e) => {
                  dispatch(Authentication_actions.Email_Filled(e.target.value));
                }}
              />
              <div
                className={`absolute bottom-0 w-0 h-[2px] peer-focus:w-full transition-all duration-300 ${
                  AuthState.email[1].show_error === true
                    ? "bg-red-600"
                    : "bg-blue-600"
                }`}
              ></div>
            </div>
            <div
              className={`text-red-600 font-semibold transition-[font-size] ${
                AuthState.email[1].show_error === true
                  ? "text-sm"
                  : "text-[0rem]"
              }`}
            >
              {AuthState.email[1].error_text}
            </div>
          </div>

          <div className=" w-full flex flex-col gap-2">
            <div className=" w-full relative flex justify-center">
              <input
                disabled={AuthState.Loading === true ? true : false}
                onKeyDown={(e) => {
                  /\s/g.test(e.key) && e.preventDefault();
                }}
                type={
                  AuthState.visibility_password === false ? "password" : "text"
                }
                className={`peer border-solid placeholder:text-base p-3 ${
                  AuthState.password[1].show_error === true
                    ? " border-red-600 border-b-2"
                    : " border-gray-600 border-b-[1px]"
                }`}
                placeholder="password"
                autoComplete="on"
                value={AuthState.password[0]}
                onChange={(e) => {
                  dispatch(
                    Authentication_actions.Password_Filled(e.target.value)
                  );
                }}
              />
              <div
                onClick={() => {
                  dispatch(Authentication_actions.Visible_password());
                }}
                className=" text-gray-600 absolute right-0 bottom-2 cursor-pointer text-2xl"
              >
                {AuthState.visibility_password === false ? (
                  <MdVisibilityOff />
                ) : (
                  <MdVisibility />
                )}
              </div>
              <div
                className={`absolute bottom-0 w-0 h-[2px] peer-focus:w-full transition-all duration-300 ${
                  AuthState.password[1].show_error === true
                    ? "bg-red-600"
                    : "bg-blue-600"
                }`}
              ></div>
            </div>
            <div
              className={`text-red-600 font-semibold transition-all ${
                AuthState.password[1].show_error === true
                  ? "text-sm"
                  : "text-[0px]"
              }`}
            >
              {AuthState.password[0] !== ""
                ? password_errors.map((error) => {
                    return `(${error.text}) `;
                  })
                : AuthState.password[1].error_text[0].text}
            </div>
          </div>

          {type === "Login" ? (
            <button
              disabled={AuthState.Loading === true ? true : false}
              data-type={"Login"}
              onClick={async (event) => {
                event.preventDefault();
                if (form_status("Login")) {
                  const { data, error } = await supabase.auth
                    .signInWithPassword({
                      email: AuthState.email[0],
                      password: AuthState.password[0],
                    })
                    .then((v) => {
                      console.log(v.error.message, v.error.status);
                    });

                  console.log("sended");
                } else {
                  dispatch(Authentication_actions.Show_error("Login"));
                }
              }}
              className={` relative text-white px-10 py-2 w-full text-lg"
              type="submit ${
                AuthState.Loading === true ? "bg-gray-600" : "bg-blue-600"
              }`}
            >
              Login
              {AuthState.Loading === true ? (
                <svg
                  className=" absolute top-[13px] right-[85px] animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                ""
              )}
            </button>
          ) : (
            <button
              disabled={AuthState.Loading === true ? true : false}
              data-type={"Register"}
              onClick={async (event) => {
                event.preventDefault();
                if (form_status("Register")) {
                  dispatch(Authentication_actions.Loading());
                  const { data, error } = await supabase.auth.signUp({
                    email: AuthState.email[0],
                    password: AuthState.password[0],
                    options: {
                      data: {
                        name: AuthState.name[0],
                      },
                    },
                  });
                  dispatch(Authentication_actions.Name_Filled(""));
                  dispatch(Authentication_actions.Email_Filled(""));
                  dispatch(Authentication_actions.Password_Filled(""));
                  dispatch(Authentication_actions.Registered());

                  setTimeout(() => {
                    dispatch(Authentication_actions.Registered());
                  }, 7000);

                  console.log("sended");
                } else {
                  dispatch(Authentication_actions.Show_error("Register"));
                }
              }}
              className={` relative text-white px-10 py-2 w-full text-lg 
                
                ${AuthState.Loading === true ? "bg-gray-600" : "bg-blue-600"}
                `}
              type="submit"
            >
              Register
              {AuthState.Loading === true ? (
                <svg
                  className=" absolute top-[13px] right-[85px] animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                ""
              )}
            </button>
          )}
        </form>
        <div className=" flex items-center gap-1 justify-center text-sm">
          <p className=" text-gray-800">
            you {type === "Login" ? "dont" : ""} have an account?{" "}
          </p>
          <Link
            className={`text-violet-600 underline active:text-red-600 ${
              AuthState.Loading === true
                ? " pointer-events-none"
                : " pointer-events-auto"
            }`}
            to={type === "Login" ? "/Register" : "/Login"}
          >
            {type === "Login" ? "Register" : "Login"}
          </Link>
        </div>
      </div>
    </div>
  );
}
export { AuthenticationBox };
