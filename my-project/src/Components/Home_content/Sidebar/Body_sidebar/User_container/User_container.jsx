import { User } from "./User";
function User_container() {
  return (
    <div className="user_container h-[calc(100%-45px)] overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col">
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </div>
  );
}
export { User_container };
