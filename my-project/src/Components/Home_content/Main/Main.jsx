import { Navbar } from "./Navbar/Navbar";
import { Message_container } from "./Messages_container/Message_container";
import { Chat_input } from "./Chat_input/Chat_input";

function Main() {
  return (
    <div className=" bg-[#deddf5] sm:w-[calc(100%-34.5%)] sm:flex flex-col hidden">
      <Navbar />
      <Message_container />
      <Chat_input />
    </div>
  );
}
export { Main };
