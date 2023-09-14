import { Login_content } from "../Components/Login_content/Login_content";
import { Navigate } from "react-router-dom";
import { Loading_page } from "./Loadingpage";
import { useSelector } from "react-redux";
function Login() {
  const UserInfo = useSelector((state) => {
    return state.User.userinfo;
  });
  return (
    <>
      {UserInfo === "Loading" ? (
        <Loading_page />
      ) : UserInfo === null ? (
        <div className=" w-full h-screen bg-blue-200">
          <Login_content />
        </div>
      ) : (
        <Navigate to={"/"} />
      )}
    </>
  );
}

export { Login };
