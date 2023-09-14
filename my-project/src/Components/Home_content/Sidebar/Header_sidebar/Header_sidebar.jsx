import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { User_Logout } from "../../../../Store/Async_actions";
import { useDispatch } from "react-redux";
import { User_actions } from "../../../../Store/Slices/Userslice";
function Header_sidebar() {
  const UserInfo = useSelector((state) => {
    return state.User;
  });
  const dispatch = useDispatch();
  console.log(User_actions);
  const [open_profile, setopen_profile] = useState(false);

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
                {UserInfo !== null ? UserInfo.email : ""}
              </span>
              <span className=" text-black font-estedad_light font-medium">
                {/* {userinfos.user.user_metadata !== null
                  ? userinfos.user.user_metadata.name
                  : ""} */}
              </span>
            </div>
          </div>
          <div>
            <h1 className=" text-white font-semibold text-xl">Chat app</h1>
          </div>
          <div>
            <button
              onClick={() => {
                dispatch(User_actions.Loading_Logout());
                dispatch(User_Logout());
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
