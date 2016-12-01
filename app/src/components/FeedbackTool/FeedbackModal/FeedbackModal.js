import React, {PropTypes} from 'react';
import MLModal from './../../MLModal/MLModal';


const FeedbackToolModal = ({form, position, onClose, isOpen}) => {
  return (
    <MLModal position={position} titleBar={{enable: false}} isOpen={isOpen} closeModal={onClose}>
      {form}
    </MLModal>
  );
};

FeedbackToolModal.propTypes = {
  form: PropTypes.object,
  position: PropTypes.object,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool
};

export default FeedbackToolModal;
