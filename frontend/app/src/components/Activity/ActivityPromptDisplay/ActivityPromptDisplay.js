import React from 'react';
import PropTypes from 'prop-types';
import {
  MLCard,
  MLEditor
} from './../../MLComponents/index';

const ActivityPromptDisplay = ({prompt}) => (
  <MLCard
    type="prompt"
    title="Activity Prompt" >
    <div data-id="prompt-description">
      <MLEditor content={prompt} editable={false} />
    </div>
  </MLCard>
);

ActivityPromptDisplay.propTypes = {
  prompt: PropTypes.object
};

export default ActivityPromptDisplay;
