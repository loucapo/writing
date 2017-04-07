import React, {PropTypes} from 'react';
import MLModal from '../MLModal';

const DraftFocusModal = (props) => {
  return (
    <MLModal
      title="Select the primary goals of this draft"
      closeModal={props.closeModal}>
      <p>(Draft Focus Modal content will go in here)</p>
    </MLModal>
  );
};

DraftFocusModal.propTypes = {
  closeModal: PropTypes.func.isRequired
};

export default DraftFocusModal;
