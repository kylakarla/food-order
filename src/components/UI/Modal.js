import React, { useEffect, useRef } from "react";

const Modal = (props) => {
  const dialogRef = useRef();

  useEffect(() => {
    if (props.isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }

    return () => {
      dialogRef.current?.close();
    };
  }, [props.isOpen]);

  return (
    <dialog ref={dialogRef} className="modal">
      <div className="modal-content">
        {props.children}
      </div>
      <div className="modal-actions">
        <button onClick={props.onClose} className="text-button">
          Close
        </button>
      </div>
    </dialog>
  );
};

export default Modal;