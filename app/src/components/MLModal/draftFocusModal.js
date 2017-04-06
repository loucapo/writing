import React from 'react';
import ModalWrapper from './ModalWrapper';

const DraftFocusModal = (props) => {
  return (
    <ModalWrapper
      title="Select the primary goals of this draft"
      closeModal={props.closeModal}>
      <p>(Draft Focus Modal content will go in here)</p>
    </ModalWrapper>
  );
};

export default DraftFocusModal;
