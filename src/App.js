import Editor from "./components/Editor";
import Test from "./components/Testcomponent";

function App() {
  return (
    <div>
      <h1>hello</h1>
      <Editor text='first'/>
      <Editor text='second'/>
      <Test text='third'/>
    </div>
  );
}

export default App;
