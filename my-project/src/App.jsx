import { useNavigate, useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import { useEffect, useRef } from "react";
import supabase from "./Supabase/Supabase";
import { useSelector } from "react-redux";
import App_provider from "./App_context";

// const T = JSON.parse(
//   localStorage.getItem("sb-acsgpvqkpifsfgrjmqxn-auth-token")
// );
// T.expires_at = 3601;
// localStorage.setItem("sb-acsgpvqkpifsfgrjmqxn-auth-token", JSON.stringify(T));
// supabase.auth
//   .getSession()
//   .then((v) => {
//     v.data.session.expires_at = 7200;
//     return v;
//   })
//   .then((va) => {
//     console.log(va);
//   });

function App() {
  const router = useRoutes(routes);
  // const _Navigate = useNavigate();
  const Supabase = JSON.parse(
    localStorage.getItem("sb-acsgpvqkpifsfgrjmqxn-auth-token")
  );
  const AuthState = useSelector((state) => {
    return state.Authentication;
  });

  return (
    <App_provider.Provider value={Supabase}>
      <div>{router}</div>
    </App_provider.Provider>
  );
}
export default App;
