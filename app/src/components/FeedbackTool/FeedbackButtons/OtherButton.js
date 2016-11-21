import React from 'react';
import FeedbackButton from './FeedbackButton'

const OtherButton = ({submitOtherComment,position, highlight}) => {
  let commentIcon = 'https://macmillanlearning.atlassian.net/secure/attachment/21936/comment.svg';
  let model = {
    otherComment: {
      type: 'textarea',
        name: 'otherComment',
        placeholder: 'Add a comment'
    },
    sentimentLevel: {
      type: 'select',
        name: 'sentimentLevel'
    }
  };

  return (<div>
      <FeedbackButton
        highlight={highlight}
        color="green"
        buttonName="other"
        commentIcon={commentIcon}
        onSubmit={submitOtherComment}
        model={model}
        position={position}
        />
    </div>
  );
};

export default OtherButton;