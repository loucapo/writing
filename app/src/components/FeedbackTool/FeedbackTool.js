import React, { PropTypes } from 'react';
import RichTextEditor from 'ml-react-rte';

const FeedbackTool = ({value, onChange}) => {
  return (<RichTextEditor onChange={onChange} value={value} readOnly={true} />);
};

FeedbackTool.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func
};

export default FeedbackTool;
