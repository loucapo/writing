import React, {PropTypes} from 'react';
import RichTextEditor from 'ml-react-rte';
import SideMenu from './SideMenu/SideMenu';
import StudentReflection from './StudentReflection/StudentReflection';
import InstructorComment from './InstructorComment/InstructorComment';
import feedbackTool from './feedbackTool.css';

const FeedbackTool = ({value, onChange}) => {
  return (
    <section>
      <StudentReflection />
      <InstructorComment />
      <div className={feedbackTool.editorContainer}>
        <RichTextEditor onChange={onChange} value={value} readOnly='true' />
      </div>
      <SideMenu />
    </section>
  );
}

FeedbackTool.propTypes = {
  document: PropTypes.object
};

export default FeedbackTool;
