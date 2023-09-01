import { BsFillCameraVideoFill } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaUserPlus } from "react-icons/fa";
function Navbar() {
  return (
    <div className=" px-6 py-6 bg-[#5f5c8d]">
      <div className=" flex justify-between items-center flex-wrap">
        <div className=" text-xl">
          <span className=" text-white">Abbas Hosseini</span>
        </div>
        <div className=" text-white flex gap-6">
          <span className=" text-lg">
            <BsFillCameraVideoFill />
          </span>
          <span className=" text-lg">
            <FaUserPlus />
          </span>
          <span className=" text-lg">
            <FiMoreHorizontal />
          </span>
        </div>
      </div>
    </div>
  );
}
export { Navbar };
