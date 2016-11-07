import React from 'react';
import RichTextEditor from 'react-rte';

const FeedbackTool = ({studentDraft}) => {
  console.log(studentDraft);
  return (<RichTextEditor value={studentDraft} readOnly={true}/>)
}

export default FeedbackTool;
