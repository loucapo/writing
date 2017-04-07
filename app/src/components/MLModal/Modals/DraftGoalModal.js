import React, {PropTypes} from 'react';
import MLModal from '../MLModal';

const DraftGoalModal = ({closeModal, isOpen}) => {
  return isOpen
    ?
      (<MLModal
        title="Select the primary goals of this draft"
        closeModal={closeModal}>
        <p>(Draft Focus Modal content will go in here)</p>
      </MLModal>)
    : null;
};

DraftGoalModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool
};

export default DraftGoalModal;
