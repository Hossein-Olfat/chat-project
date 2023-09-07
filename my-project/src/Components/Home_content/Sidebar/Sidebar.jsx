import { Header_sidebar } from "./Header_sidebar/Header_sidebar";
import { Body_sidebar } from "./Body_sidebar/Body_sidebar";
function Sidebar() {
  return (
    <div className="flex flex-col bg-[#3e3c60] sm:h-screen sm:w-[34.5%] min-w-[260px] gap-2 overflow-hidden flex-grow">
      <Header_sidebar />
      <Body_sidebar />
    </div>
  );
}

export { Sidebar };
