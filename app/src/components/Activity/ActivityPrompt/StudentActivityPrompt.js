import React from 'react';
import PropTypes from 'prop-types';
import MLCard from '../../MLCard/MLCard';
import Editor from '../../MLEditor/MLEditor';

const StudentActivityPrompt = ({prompt}) => (
  <MLCard
    type="prompt"
    title="Assignment Prompt" >
    <div data-id="prompt-description">
      <Editor content={prompt} editable={false} />
    </div>
  </MLCard>
);

StudentActivityPrompt.propTypes = {
  prompt: PropTypes.object
};

export default StudentActivityPrompt;
