import { Header_sidebar } from "./Header_sidebar/Header_sidebar";
import { Body_sidebar } from "./Body_sidebar/Body_sidebar";
function Sidebar() {
  return (
    <div className=" flex flex-col bg-[#3e3c60] h-screen w-[34.5%] gap-2 overflow-hidden">
      <Header_sidebar />
      <Body_sidebar />
    </div>
  );
}

export { Sidebar };
