import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);
// const _access_token = JSON.parse(
//   localStorage.getItem("sb-acsgpvqkpifsfgrjmqxn-auth-token")
// ).access_token;
// supabase.auth.getUser(_access_token).then((val) => {
//   console.log(val);
// });
// supabase.auth.refreshSession().then((v) => {
//   console.log(v);
// });

export default supabase;
