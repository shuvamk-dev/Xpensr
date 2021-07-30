import React from "react";
import Modal from "react-modal";
const SuccessModal = ({ modalOpen, setModalOpen }) => {
  return (
    <Modal isOpen={modalOpen}>
      <div>Hello</div>
    </Modal>
  );
};

export default SuccessModal;
