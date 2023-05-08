import React from "react";
import "../../styles/modal.scss"

const Modal = ({ visible, delVisible, children, className, modalClose = true }) => {
  return (
    <div onClick={delVisible} className={`${className} modal ${visible ? "active" : ''}`}>
      <div onClick={(e) => e.stopPropagation()} className="wrapper">
        {children}
        {modalClose ?
        <span onClick={delVisible} className="modal-close"></span>
        : ''
      }
      </div>
    </div>
  );
}

export default Modal 