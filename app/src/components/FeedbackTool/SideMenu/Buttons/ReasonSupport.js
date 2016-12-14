import React from 'react';
import ModalFeedbackButton from './ModalFeedbackButton';
import ReasonSupportSVG from './ReasonSupportSVG';

const ReasonSupportButton = (props) => {

  const icon = (<ReasonSupportSVG className="Icon" />);
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
