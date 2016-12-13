import React from 'react';
import ModalFeedbackButton from './ModalFeedbackButton';
import OtherSVG from './OtherSVG';

const Other = (props) => {

  const icon = (<OtherSVG className="Icon" />);
  return (
    <ModalFeedbackButton
      color="blue"
      contentType="other"
      commentIcon={icon}
      {...props}
    />
  );
};

export default Other;
