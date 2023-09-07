import { AuthenticationBox } from "../AuthenticationBox/AuthenticationBox";
import { useRef } from "react";
import { Link } from "react-router-dom";
function Register_content() {
  // const access_ref = useRef(null);
  // const access__token = JSON.parse(
  //   localStorage.getItem("sb-acsgpvqkpifsfgrjmqxn-auth-token")
  // );
  // access_ref.current = access__token;

  return (
    <div className="w-full h-full">
      {/* {access_ref.current === null ? ( */}
      <AuthenticationBox key={"Register"} type="Register" />
      {/* ) : ( */}
      {/* <div className=" flex w-full h-screen justify-center items-center">
          <div className=" p-8 bg-white rounded-3xl flex flex-col gap-6 items-center">
            <span className="text-2xl">You have already sign up</span>
            <Link
              className=" bg-[#6e6efd] py-1 px-2 rounded-[10px] text-white"
              to={"/"}
            >
              Go Back
            </Link>
          </div>
        </div>
      )} */}
    </div>
  );
}
export { Register_content };
