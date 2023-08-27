import { useDispatch, useSelector } from "react-redux";
import { Login_actions } from "../../Store/Slices/LoginSlice";
import { Link } from "react-router-dom";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { MdClose } from "react-icons/md";
function Login_content() {
  const LoginState = useSelector((state) => {
    return state.login;
  });
  const dispatch = useDispatch();
  const password_errors = LoginState.password[1].error_text[1].filter(
    (Each) => {
      return Each.error === true;
    }
  );
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className=" w-96 bg-white rounded-xl px-7 mx-2 py-8 flex flex-col gap-4">
        <div className=" flex flex-col items-center gap-2">
          <h1 className=" text-4xl text-gray-700 font-semibold">chat app</h1>
          <span className="">Login</span>
        </div>
        <form className=" flex flex-col justify-center items-center gap-5">
          <div className="w-full flex flex-col gap-1">
            <div className=" w-full relative flex justify-center">
              <input
                onKeyDown={(e) => {
                  const A = new RegExp("Hellow", "g");

                  /\s/g.test(e.key) && e.preventDefault();
                }}
                type="email"
                placeholder="email"
                className={`peer border-solid ${
                  LoginState.email[1].show_error === true
                    ? " border-red-600 border-b-2"
                    : " border-gray-600 border-b-[1px]"
                } placeholder:text-base p-3`}
                value={LoginState.email[0]}
                onChange={(e) => {
                  dispatch(Login_actions.Email_Filled(e.target.value));
                }}
              />
              <div
                className={`absolute bottom-0 w-0 h-[2px] peer-focus:w-full transition-all duration-300 ${
                  LoginState.email[1].show_error === true
                    ? "bg-red-600"
                    : "bg-blue-600"
                }`}
              ></div>
            </div>
            <div
              className={`text-red-600 font-semibold transition-[font-size] ${
                LoginState.email[1].show_error === true
                  ? "text-sm"
                  : "text-[0rem]"
              }`}
            >
              {LoginState.email[1].error_text}
            </div>
          </div>

          <div className=" w-full flex flex-col gap-2">
            <div className=" w-full relative flex justify-center">
              <input
                onKeyDown={(e) => {
                  /\s/g.test(e.key) && e.preventDefault();
                }}
                type={
                  LoginState.visibility_password === false ? "password" : "text"
                }
                className={`peer border-solid placeholder:text-base p-3 ${
                  LoginState.password[1].show_error === true
                    ? " border-red-600 border-b-2"
                    : " border-gray-600 border-b-[1px]"
                }`}
                placeholder="password"
                autoComplete="on"
                value={LoginState.password[0]}
                onChange={(e) => {
                  dispatch(Login_actions.Password_Filled(e.target.value));
                }}
              />
              <div
                onClick={() => {
                  dispatch(Login_actions.Visible_password());
                }}
                className=" text-gray-600 absolute right-0 bottom-2 cursor-pointer text-2xl"
              >
                {LoginState.visibility_password === false ? (
                  <MdVisibilityOff />
                ) : (
                  <MdVisibility />
                )}
              </div>
              <div
                className={`absolute bottom-0 w-0 h-[2px] peer-focus:w-full transition-all duration-300 ${
                  LoginState.password[1].show_error === true
                    ? "bg-red-600"
                    : "bg-blue-600"
                }`}
              ></div>
            </div>
            <div
              className={`text-red-600 font-semibold transition-all ${
                LoginState.password[1].show_error === true
                  ? "text-sm"
                  : "text-[0px]"
              }`}
            >
              {LoginState.password[0] !== ""
                ? password_errors.map((error) => {
                    return `(${error.text}) `;
                  })
                : LoginState.password[1].error_text[0].text}
            </div>
          </div>
          <button
            onClick={(event) => {
              event.preventDefault();
              dispatch(Login_actions.Show_error());
            }}
            className=" bg-blue-600 text-white px-10 py-2 w-full text-lg"
            type="submit"
          >
            Sign in
          </button>
        </form>
        <div className=" flex items-center gap-1 justify-center text-sm">
          <p className=" text-gray-800">you dont have an account? </p>
          <Link
            className="text-violet-600 underline active:text-red-600"
            to="/register"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export { Login_content };
