function ButtonModal({ dialog, buttonLabel = "Read More" }) {
  function handleClick() {
    document.getElementById("my_modal_1").showModal();
  }

  return (
    <>
      <button
        className="btn btn-primary btn-lg text-base-100"
        type="button"
        data-modal-toggle="my_modal_1"
        onClick={handleClick}
      >
        {buttonLabel}
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">{dialog} </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default ButtonModal;
