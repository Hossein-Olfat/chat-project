import { useRef } from "react";
import { MdAttachFile } from "react-icons/md";
import { TbPhotoPlus } from "react-icons/tb";
function Chat_input() {
  const textarea_size = useRef(null);

  return (
    <div className=" bg-white">
      <div className=" px-6 py-4">
        <form className={`flex items-end`}>
          <div className=" w-full">
            <textarea
              id="Chat_input"
              ref={textarea_size}
              onInput={() => {
                textarea_size.current.style.height = "24px";
                console.log(textarea_size);
                textarea_size.current.style.height =
                  textarea_size.current.scrollHeight + "px";
              }}
              type="text"
              className="bg-transparent h-6"
              placeholder="type something ..."
            />
          </div>

          <div className=" flex items-center gap-4">
            <div className=" text-2xl text-gray-400">
              <MdAttachFile />
            </div>
            <div className=" text-2xl text-gray-400">
              <TbPhotoPlus />
            </div>
            <div className=" bg-[#6e6efd] px-2 py-1 text-white">
              <button
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export { Chat_input };
// $("#textarea").on("input", function () {
//   $(this)
//     .css("height", "auto")
//     .css("height", this.scrollHeight + (this.offestHeight - this.clientHeight));
// });
