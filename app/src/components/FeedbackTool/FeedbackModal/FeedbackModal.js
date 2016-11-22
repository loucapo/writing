import React from 'react';
import MLModal from './../../MLModal/MLModal';


const FeedbackToolModal = ({form, position, onClose, isOpen}) => {
  return (
    <MLModal position={position} titleBar={{enable: false}} isOpen={isOpen} closeModal={onClose}>
      {form}
    </MLModal>
  );
};

export default FeedbackToolModal;
