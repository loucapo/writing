import React from 'react';
import ModalFeedbackButton from './ModalFeedbackButton';
import CommentSVG from './Icons/CommentSVG';

const ReasonSupportButton = (props) => {
  const icon = (<CommentSVG className="Icon" />);
  return (
    <ModalFeedbackButton
      color="blue"
      contentType="reasonSupport"
      commentIcon={icon}
      title="Reason and Support"
      {...props}
    />
  );
};

export default ReasonSupportButton;
