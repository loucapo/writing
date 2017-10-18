import React from 'react';
import PropTypes from 'prop-types';
import { MLCard, MLEditor } from '../../MLComponents';

const ActivityPromptDisplay = ({ prompt }) => {
  let promptText = prompt && prompt.blocks[0].text;
  return(
    (promptText) ?
      <MLCard type="prompt" title="Activity Prompt">
        <div data-id="prompt-description">
          <MLEditor content={prompt} editable={false} toolbarHidden={true} />
        </div>
      </MLCard>
    : null
  );
};

ActivityPromptDisplay.propTypes = {
  prompt: PropTypes.object
};

export default ActivityPromptDisplay;
