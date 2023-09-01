function Message({ who }) {
  return (
    <div dir={`${who === "me" ? "ltr" : "rtl"}`}>
      <div className="flex flex-col w-1/2">
        <div className=" flex items-center gap-4 w-fit">
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
                ? "bg-[#6e6efd] text-white rounded-tr-2xl"
                : "bg-white text-black rounded-tl-2xl"
            }   py-2 px-4  rounded-br-2xl rounded-bl-2xl w-[calc(100%-61px)] break-all`}
          >
            <p>aaaaaaaaaaa</p>
          </div>
        </div>
        <span className="text-gray-400">just now</span>
      </div>
    </div>
  );
}
export { Message };
