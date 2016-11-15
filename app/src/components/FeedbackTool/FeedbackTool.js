import React, {PropTypes} from 'react';
import RichTextEditor from 'react-rte';
import SideMenu from './SideMenu/SideMenu';
import feedbackTool from './feedbackTool.css';

const FeedbackTool = ({document}) => {
  return (
    <section>
      <div className={feedbackTool.editorContainer}>
        <RichTextEditor value={document} readOnly={true} />
      </div>
      <SideMenu />
    </section>
  );
}

FeedbackTool.propTypes = {
  document: PropTypes.object
};

export default FeedbackTool;
