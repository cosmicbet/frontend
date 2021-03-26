import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

const Wrapper = styled.div`
  color: black;
`;
const Content = styled.div``;

const ModalComponent = ({ children, ...restModalProps }) => {
  const { onRequestClose } = restModalProps;
  return (
    <Modal {...restModalProps}>
      <Wrapper>
        {onRequestClose && <div onClick={onRequestClose}>close X</div>}
        <Content>{children}</Content>
      </Wrapper>
    </Modal>
  );
};

export default ModalComponent;
