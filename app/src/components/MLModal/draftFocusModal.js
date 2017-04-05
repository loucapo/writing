import React from 'react';
import ModalWrapper from './ModalWrapper.js';

const DraftFocusModal = props => {
  const closeModal = () => {
    props.hideModal();
  };

  return (
    <ModalWrapper
      {...props}
      title="Test"
      width={400}
      showOk={false}
    >
      <p>Testing</p>
      <button onClick={() => closeModal()}>Test</button>
    </ModalWrapper>
  );
};

export default DraftFocusModal;
