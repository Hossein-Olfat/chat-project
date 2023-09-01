function User() {
  return (
    <div className=" hover:bg-[#2f2d51] cursor-pointer p-3">
      <div className=" flex items-center gap-3">
        <div
          style={{
            backgroundImage: `url(/images/profile_images/joseph-gonzalez-iFgRcqHznqg--unsplash.jpg)`,
          }}
          className="w-[55px] h-[55px] bg-cover bg-center rounded-[50%]"
        ></div>
        <div>
          <h1 className=" text-white font-medium text-lg">Abbas Hosseini</h1>
          <p className="text-[rgba(225,225,225,0.4)]">
            Hellow people How are You ?
          </p>
        </div>
      </div>
    </div>
  );
}
export { User };
