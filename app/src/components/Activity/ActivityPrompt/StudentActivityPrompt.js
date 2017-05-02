import React from 'react';
import PropTypes from 'prop-types';
import MLCard from '../../MLCard/MLCard';
import MLDisplayEditor from '../../MLDisplayEditor/MLDisplayEditor';

const StudentActivityPrompt = ({prompt}) => (
  <MLCard
    type="prompt"
    title="Assignment Prompt" >
    <div data-id="prompt-description">
      <MLDisplayEditor content={prompt} />
    </div>
  </MLCard>
);

StudentActivityPrompt.propTypes = {
  prompt: PropTypes.object
};

export default StudentActivityPrompt;
