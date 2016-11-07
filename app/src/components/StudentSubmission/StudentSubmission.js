import React from 'react';
import RichTextEditor from 'react-rte';

const StudentSubmission = ({studentDraft}) => {
  console.log(studentDraft);
  return (<RichTextEditor value={studentDraft} readOnly={true}/>)
}

export default StudentSubmission;
