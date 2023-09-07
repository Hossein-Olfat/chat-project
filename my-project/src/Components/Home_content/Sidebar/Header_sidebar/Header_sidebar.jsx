import { useContext, useState } from "react";
import App_provider from "../../../../App_context";
import supabase from "../../../../Supabase/Supabase";
import { useNavigate } from "react-router-dom";

function Header_sidebar() {
  const app = useContext(App_provider);
  const [open_profile, setopen_profile] = useState(false);
  const _Navigate = useNavigate();
  console.log(app);
  return (
    <div className=" bg-[#2f2d51] px-3 py-[20.5px]">
      <div className=" flex items-center justify-between flex-wrap">
        <div className="flex items-center gap-4 justify-between w-full">
          <div
            onClick={() => {
              setopen_profile(!open_profile);
            }}
            className=" flex items-center gap-2 flex-wrap relative"
          >
            <div
              style={{
                backgroundImage: `url(/images/profile_images/albert-dera-ILip77SbmOE--unsplash.jpg)`,
              }}
              className=" w-[35px] h-[35px] bg-cover bg-center rounded-[50%] cursor-pointer"
            ></div>
            <div
              className={` flex gap-2 flex-col p-2 absolute top-10 left-4 w-52 bg-white ${
                open_profile === true ? " flex" : " hidden"
              }`}
            >
              <span className=" text-black font-estedad_light font-medium">
                {app !== null && app.user.user_metadata.name}
              </span>
              <span className=" text-black font-estedad_light font-medium">
                {app !== null && app.user.email}
              </span>
            </div>
          </div>
          <div>
            <h1 className=" text-white font-semibold text-xl">Chat app</h1>
          </div>
          <div>
            <button
              onClick={async () => {
                const { data, error } = await supabase.auth.signOut();
                _Navigate("/login");
              }}
              className=" text-white text-xs bg-[#8582ac] p-[6px] cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export { Header_sidebar };
