import { useDispatch, useSelector } from "react-redux";
import { Authentication_actions } from "../../Store/Slices/AuthenticationSlice";
import { Link } from "react-router-dom";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
import { useRef } from "react";

function AuthenticationBox({ type }) {
  const AuthState = useSelector((state) => {
    return state.Authentication;
  });
  // const control_keycode = [
  //   "Alt",
  //   "Shift",
  //   "Control",
  //   "Enter",
  //   "ContextMenu",
  //   "NumLock",
  //   "Meta",
  //   "Backspace",
  //   "ScrollLock",
  //   "PageUp",
  //   "Home",
  //   "Insert",
  //   "Delete",
  //   "End",
  //   "PageDown",
  //   "Pause",
  //   "Escape",
  //   "BrowserFavorites",
  //   "BrowserForward",
  //   "BrowserBack",
  //   "BrowserStop",
  //   "BrowserRefresh",
  //   "LaunchMail",
  //   "MediaPlayPause",
  //   "MediaStop",
  //   "AudioVolumeMute",
  //   "Standby",
  //   "F1",
  //   "F2",
  //   "F3",
  //   "F4",
  //   "F5",
  //   "F6",
  //   "F7",
  //   "F8",
  //   "F9",
  //   "F10",
  //   "F11",
  //   "F12",
  //   "MediaTrackPrevious",
  //   "AudioVolumeDown",
  //   "AudioVolumeUp",
  //   "MediaTrackNext",
  //   "ArrowLeft",
  //   "ArrowRight",
  //   "ArrowUp",
  //   "ArrowDown",
  //   "Tab",
  //   "CapsLock",
  //   "Clear",
  // ];

  const dispatch = useDispatch();
  const password_errors = AuthState.password[1].error_text[1].filter((Each) => {
    return Each.error === true;
  });

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className=" w-96 bg-white rounded-xl px-7 mx-2 py-[1.3rem] flex flex-col gap-4">
        <div className=" flex flex-col items-center gap-2">
          <h1 className=" text-4xl text-gray-700 font-semibold">chat app</h1>
          <span className="">{type === "Login" ? "Login" : "Register"}</span>
        </div>

        <form className=" flex flex-col justify-center items-center gap-4">
          {type === "Register" ? (
            <div className="w-full flex flex-col gap-1">
              <div className=" w-full relative flex justify-center">
                <input
                  onKeyDown={(e) => {
                    /[^A-za-z ]/g.test(e.key) && e.preventDefault();
                  }}
                  value={AuthState.name[0]}
                  onChange={(e) => {
                    dispatch(
                      Authentication_actions.Name_Filled(e.target.value)
                      // !/^[A-Za-z]+( [A-Za-z]+)*$/g.test(value.name[0])
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

          <button
            onClick={(event) => {
              event.preventDefault();
              dispatch(Authentication_actions.Show_error());
            }}
            className=" bg-blue-600 text-white px-10 py-2 w-full text-lg"
            type="submit"
          >
            {type === "Login" ? "Sign in" : "Sign up"}
          </button>
        </form>
        <div className=" flex items-center gap-1 justify-center text-sm">
          <p className=" text-gray-800">
            you {type === "Login" ? "dont" : ""} have an account?{" "}
          </p>
          <Link
            className="text-violet-600 underline active:text-red-600"
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
