import React from 'react';
import RichTextEditor from 'react-rte';

const FeedbackTool = ({document}) => {
  return (<RichTextEditor value={document} readOnly={true}/>)
}

export default FeedbackTool;
