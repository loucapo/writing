import React, {PropTypes} from 'react';
import ModalWrapper from './ModalWrapper';

const DraftGoalModal = ({closeModal, isOpen}) => {
  return isOpen
    ?
      (<ModalWrapper
        title="Select the primary goals of this draft"
        closeModal={closeModal}>
        <p>(Draft Focus Modal content will go in here)</p>
      </ModalWrapper>)
    : null;
};

DraftGoalModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool
};

export default DraftGoalModal;
