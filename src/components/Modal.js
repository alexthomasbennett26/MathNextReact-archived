import React from "react";
import "./Modal.css";

function Modal(props) {
  return props.trigger ? (
    <div className="modal">
      <div className="modal-inner">
        <h3>Create New Test</h3>
        <input type="text"></input>
        <section className="actions">
          <button className="close-button" onClick={() => props.setTrigger(false)}>
            Cancel
          </button>
          <button type="submit" className="create-button">
            Create
          </button>
        </section>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Modal;
