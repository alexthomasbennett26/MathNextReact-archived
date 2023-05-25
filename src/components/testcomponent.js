import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Test = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function newHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }


  return (
    <div>
      <h3>hi {props.text}</h3>
      <button className="new" onClick={newHandler}>
        Create New
      </button>
      { modalIsOpen && <Modal onCancel={closeModalHandler} onCofirm={closeModalHandler}/> }
      { modalIsOpen && <Backdrop onCancel={closeModalHandler} />}

    </div>
  );
};

export default Test;
