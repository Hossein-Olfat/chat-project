function Header_sidebar() {
  return (
    <div className=" bg-[#2f2d51] px-3 py-5">
      <div className=" flex items-center justify-between">
        <div>
          <h1 className=" text-white font-semibold text-xl">Chat app</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className=" flex items-center gap-2">
            <div
              style={{
                backgroundImage: `url(/images/profile_images/albert-dera-ILip77SbmOE-unsplash.jpg)`,
              }}
              className=" w-[35px] h-[35px] bg-cover bg-center rounded-[50%]"
            ></div>
            <span className=" text-white font-estedad_light font-medium">
              Ahmad Alizadeh
            </span>
          </div>
          <div>
            <button className=" text-white text-xs bg-[#8582ac] p-[6px]">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export { Header_sidebar };
