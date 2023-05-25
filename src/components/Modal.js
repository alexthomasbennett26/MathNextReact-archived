const Modal = (props) => {
  function cancelHandler() {
    props.onCancel();
  }
  function confirmHandler() {
    props.onCofirm();
  }

  return (
    <div className="modal">
      <p>Create New Test</p>
      <input type="text"></input>
      <section className="actions">
        <button type="submit" className="primarybutton" onClick={cancelHandler}>
          Create
        </button>
        <button type="" className="tertiarybutton" onClick={confirmHandler}>
          Cancel
        </button>
      </section>
    </div>
  );
};

export default Modal;
