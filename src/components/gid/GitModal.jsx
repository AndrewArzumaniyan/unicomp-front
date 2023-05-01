import React from "react";
import Modal from "../UI/Modal";

const GidModal = ({ isResize, isOpen, closeModal, setSelectCity, cities }) => {
  return (
    <Modal visible={isOpen}>
      <div className="gid-modal__title-box">
        <h3 className="gid-modal__title title">ВЫБРАТЬ ГОРОД</h3>
      </div>
    </Modal>
  );
}

export default GidModal