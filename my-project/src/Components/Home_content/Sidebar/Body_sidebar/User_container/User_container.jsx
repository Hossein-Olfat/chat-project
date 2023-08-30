import { User } from "./User";
function User_container() {
  return (
    <div className="user_container h-[478px] overflow-y-auto">
      <div className="flex flex-col">
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
