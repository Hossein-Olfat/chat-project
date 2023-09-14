import { Home_content } from "../Components/Home_content/Home_content";
import { Navigate } from "react-router-dom";
import { Loading_page } from "./Loadingpage";
import { useSelector } from "react-redux";
function Home() {
  const UserInfo = useSelector((state) => {
    return state.User.userinfo;
  });
  console.log(UserInfo);
  return (
    <>
      {UserInfo === "Loading" ? (
        <Loading_page />
      ) : UserInfo === null ? (
        <Navigate to={"/Login"} />
      ) : (
        <div>
          <Home_content />
        </div>
      )}
    </>
  );
}

export { Home };
