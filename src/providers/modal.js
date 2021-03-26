import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import Modal from "../components/modal";
import ModalInfoComponent from "../components/modalInfo";
import { ModalContext } from "../contexts";

const initialModalData = {
  text: "",
  type: "",
  isOpen: false,
};

const ModalProvider = ({ children, appElementSelector }) => {
  useEffect(() => {
    ReactModal.setAppElement(appElementSelector);
  }, [appElementSelector]);

  const [infoModalData, setInfoModalData] = useState(initialModalData);

  const openInfoModal = (text, type) => {
    setInfoModalData({ text: text, type: type, isOpen: true });
  };

  const closeInfoModal = () => {
    setInfoModalData(initialModalData);
  };

  return (
    <ModalContext.Provider
      value={{
        openInfoModal,
      }}
    >
      {children}
      <Modal
        isOpen={infoModalData.isOpen}
        onRequestClose={closeInfoModal}
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={true}
      >
        <ModalInfoComponent infoModalData={infoModalData} />
      </Modal>
    </ModalContext.Provider>
  );
};

export default ModalProvider;
