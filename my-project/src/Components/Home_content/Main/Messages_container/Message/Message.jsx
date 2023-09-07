function Message({ who }) {
  return (
    <div dir={`${who === "me" ? "ltr" : "rtl"}`}>
      <div className="flex flex-col w-[85%] min-w-[333px]">
        <div className=" flex items-end gap-4 w-fit">
          <div
            style={{
              backgroundImage: `url(/images/profile_images/albert-dera-ILip77SbmOE--unsplash.jpg)`,
            }}
            className="bg-cover bg-center rounded-[50%] w-[45px] h-[45px]"
          ></div>
          <div
            dir="ltr"
            className={`${
              who === "me"
                ? "bg-[#6e6efd] text-white rounded-br-2xl"
                : "bg-white text-black rounded-bl-2xl"
            }   py-2 px-4  rounded-tr-2xl rounded-tl-2xl w-[calc(100%-61px)] break-all`}
          >
            <div className=" max-w-[380px] w-full">
              <img
                className={`
                   rounded-t-2xl w-full object-cover
                ${who === "me" ? " rounded-br-2xl" : "rounded-bl-2xl"}`}
                src="/images/profile_images/joseph-gonzalez-iFgRcqHznqg--unsplash.jpg"
              />
            </div>
            <p>aaaaaaaaaaa</p>
          </div>
        </div>
        <span className="text-gray-400">just now</span>
      </div>
    </div>
  );
}
export { Message };
