import { AuthenticationBox } from "../AuthenticationBox/AuthenticationBox";
import { useRef } from "react";
import { Link } from "react-router-dom";
function Register_content() {
  return (
    <div className="w-full h-full">
      <AuthenticationBox type="Register" />
    </div>
  );
}
export { Register_content };
