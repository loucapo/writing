import React, {PropTypes} from 'react';
import RichTextEditor from 'ml-react-rte';
import SideMenu from './SideMenu/SideMenu';
import StudentReflection from './StudentReflection/StudentReflection';
import EndComment from './EndComment/EndComment';
import feedbackTool from './feedbackTool.css';

const FeedbackTool = ({value, onChange}) => {
  return (
    <section>
      <div className={feedbackTool.editorContainer}>
        <StudentReflection />
        <RichTextEditor onChange={onChange} value={value} readOnly='true' />
        <EndComment />
      </div>
      <SideMenu />
    </section>
  );
}

FeedbackTool.propTypes = {
  document: PropTypes.object
};

export default FeedbackTool;
