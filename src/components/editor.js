const Editor = (props) => {
  


  return (<div>
    <h3>hi {props.text}</h3>
    <section>
      <section id="buttonsection">
        <button id="pi-button">π</button>
        <button id="plus-button">+</button>
        <button id="minus-button">-</button>
        <button tid="multiply-button">x</button>
        <button id="divide-button">÷</button>
        <button id="lessthan-button">&lt;</button>
        <button id="greaterthan-button">&gt;</button>
        <button id="greaterequal-button">≥</button>
        <button id="lessequal-button">≤</button>
        <button id="power-button">power</button>
        <button id="parentheses-button">( )</button>
        <button id="vertical-lines-button">| |</button>
        <button id="division-button">x/y</button>
        <button id="sqrt-button">√</button>
        <button id="sqrtindex-button">x√</button>
      </section>
      <section id="math-field"></section>
    </section>
  </div>
  )
};

export default Editor;
