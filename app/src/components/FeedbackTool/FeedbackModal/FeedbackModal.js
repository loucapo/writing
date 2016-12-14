import React, {PropTypes} from 'react';
import MLModal from './../../MLModal/MLModal';


const FeedbackToolModal = ({title, form, position, onClose, isOpen}) => {
  return (
    <MLModal position={position} titleBar={{enable: false}} isOpen={isOpen} closeModal={onClose}>
      {title}
      {form}
    </MLModal>
  );
};

FeedbackToolModal.propTypes = {
  title: PropTypes.string,
  form: PropTypes.object,
  position: PropTypes.object,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool
};

export default FeedbackToolModal;
