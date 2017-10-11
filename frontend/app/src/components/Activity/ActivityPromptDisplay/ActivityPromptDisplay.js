import React from 'react';
import PropTypes from 'prop-types';
import { MLCard, MLEditor } from '../../MLComponents';

import styles from '../ActivityPrompt/activityPrompt.css';

const ActivityPromptDisplay = ({ prompt }) => {
  let promptText = prompt && prompt.blocks[0].text;
  return(
    (promptText) ?
      <MLCard type="prompt" title="Activity Prompt">
        <div data-id="prompt-description" className={styles.prompt}>
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
