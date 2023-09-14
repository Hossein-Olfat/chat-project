import { useRef } from "react";
import { AuthenticationBox } from "../AuthenticationBox/AuthenticationBox";
import { Link } from "react-router-dom";
function Login_content() {
  return (
    <div className=" w-full h-full">
      <AuthenticationBox key={"Login"} type="Login" />
    </div>
  );
}

export { Login_content };
