import { Sidebar } from "./Sidebar/Sidebar";
import { Main } from "./Main/Main";
function Home_content() {
  return (
    <div className=" flex">
      <Sidebar />
      <Main />
    </div>
  );
}

export { Home_content };
