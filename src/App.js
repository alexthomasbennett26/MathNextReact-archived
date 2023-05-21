import Editor from "./components/Editor";
import Test from "./components/Testcomponent";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <div>
      <h1>hello</h1>
      <Editor text='first'/>
      <Editor text='second'/>
      <Test text='third'/>
      <Modal/>
      <Backdrop/>
    </div>
  );
}

export default App;
