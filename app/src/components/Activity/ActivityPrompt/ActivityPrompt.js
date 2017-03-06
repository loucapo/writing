import React, {PropTypes} from 'react';

const ActivityPrompt = ({prompt}) => {
  return (
    <div data-id="prompt-description">
      {prompt || <a href="#">Click to add prompt</a>}
    </div>
  );
};

ActivityPrompt.propTypes = {
  prompt: PropTypes.string
};

export default ActivityPrompt;
