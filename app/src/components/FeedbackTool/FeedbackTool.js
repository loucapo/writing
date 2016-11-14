import React from 'react';
import RichTextEditor from 'ml-react-rte';

const FeedbackTool = ({value,onChange}) => {
  return (<RichTextEditor onChange={onChange} value={value} />)
}

export default FeedbackTool;
