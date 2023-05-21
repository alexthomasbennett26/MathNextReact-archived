import Editor from "./components/editor";
import Test from "./components/testcomponent";

function App() {
  return (
    <div>
      <h1>hello</h1>
      <Editor text='first'/>
      <Editor text='second'/>
      <Editor text='third'/>
      <Test text='third'/>
    </div>
  );
}

export default App;
