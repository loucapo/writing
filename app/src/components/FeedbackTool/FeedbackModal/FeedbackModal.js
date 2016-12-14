import React, {PropTypes} from 'react';
import MLModal from './../../MLModal/MLModal';

const FeedbackToolModal = ({form, position, onClose, isOpen, title}) => {
  return (
    <MLModal position={position} titleBar={{enable: false}} isOpen={isOpen} closeModal={onClose}>
      {title}
      {form}
    </MLModal>
  );
};

FeedbackToolModal.propTypes = {
  form: PropTypes.object,
  position: PropTypes.object,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  title: PropTypes.string
};

export default FeedbackToolModal;
