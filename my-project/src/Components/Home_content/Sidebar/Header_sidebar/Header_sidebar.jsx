function Header_sidebar() {
  return (
    <div className=" bg-[#2f2d51] px-3 py-[20.5px]">
      <div className=" flex items-center justify-between flex-wrap">
        <div className="flex items-center gap-4 justify-between w-full">
          <div className=" flex items-center gap-2 flex-wrap">
            <div
              style={{
                backgroundImage: `url(/images/profile_images/albert-dera-ILip77SbmOE--unsplash.jpg)`,
              }}
              className=" w-[35px] h-[35px] bg-cover bg-center rounded-[50%] cursor-pointer"
            ></div>
            {/* <span className=" text-white font-estedad_light font-medium">
              Ahmad Alizadeh
            </span> */}
          </div>
          <div>
            <h1 className=" text-white font-semibold text-xl">Chat app</h1>
          </div>
          <div>
            <button className=" text-white text-xs bg-[#8582ac] p-[6px] cursor-pointer">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export { Header_sidebar };
