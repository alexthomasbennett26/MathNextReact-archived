const Modal = () => {
    return (
    <div className='modal'>
        <p>Create New Test</p>
        <input type='text'></input>
        <section className='actions'>
            <button type="submit" className='primarybutton'>Create</button>
            <button type="" className='tertiarybutton'>Dismiss</button>
        </section>
    </div>
  );
};

export default Modal;
