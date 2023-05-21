const Test = (props) => {
  
    function newHandler() {
        console.log('clicked new');
    }
  
    return (
    <div>
      <h3>hi {props.text}</h3>
      <button className="new" onClick={newHandler}>Create New</button>
    </div>
  );
};

export default Test;
