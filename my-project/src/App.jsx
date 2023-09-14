import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import { useEffect } from "react";
import supabase from "./Supabase/Supabase";
import { useSelector, useDispatch } from "react-redux";

import { User_actions } from "./Store/Slices/Userslice";
function App() {
  const router = useRoutes(routes);
  const dispatch = useDispatch();
  // const UserInfo = useSelector((state) => {
  //   return state.User.userinfo;
  // });

  useEffect(() => {
    supabase.auth.getSession().then((info) => {
      info.error === null
        ? dispatch(
            User_actions.Inituserdata(
              info.data.session !== null ? info.data.session.user : null
            )
          )
        : "";
    });
    return () => {};
  }, []);

  return <div>{router}</div>;
}
export default App;
