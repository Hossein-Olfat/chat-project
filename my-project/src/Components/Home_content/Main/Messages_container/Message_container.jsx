import { Message } from "./Message/Message";
function Message_container() {
  return (
    <div className=" h-[calc(100vh-140px)] overflow-y-auto">
      <div className=" flex flex-col py-3 px-3 gap-3">
        <Message who="me" />
        <Message who="other" />
        <Message who="me" />
        <Message who="me" />
        <Message who="mez" />
        <Message who="me" />
        <Message who="mez" />
        <Message who="me" />
        <Message who="mez" />
        <Message who="me" />
        <Message who="mez" />
        <Message who="me" />
        <Message who="mez" />
      </div>
    </div>
  );
}
export { Message_container };
