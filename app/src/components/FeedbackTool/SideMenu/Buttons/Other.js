import React from 'react';
import ModalFeedbackButton from './ModalFeedbackButton';
import CommentSVG from './Icons/CommentSVG';

const Other = (props) => {
  const icon = (<CommentSVG className="Icon" />);
  return (
    <ModalFeedbackButton
      color="blue"
      contentType="other"
      commentIcon={icon}
      title="Other"
      {...props}
    />
  );
};

export default Other;
