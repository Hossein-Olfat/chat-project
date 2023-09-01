import { User_container } from "./User_container/User_container";
import { Search_sidebar } from "./Search_sidebar/Search_sidebar";
function Body_sidebar() {
  return (
    <div className=" flex flex-col gap-2 h-[calc(100%-145px)]">
      <Search_sidebar />
      <User_container />
    </div>
  );
}
export { Body_sidebar };
