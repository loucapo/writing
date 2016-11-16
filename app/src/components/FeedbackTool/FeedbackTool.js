import React, {PropTypes} from 'react';
import RichTextEditor from 'ml-react-rte';
import SideMenu from './SideMenu/SideMenu';
import feedbackTool from './feedbackTool.css';

const FeedbackTool = ({document, onChange}) => {
  return (
    <section>
      <div className={feedbackTool.editorContainer}>
        <RichTextEditor onChange={onChange} value={document} readOnly='true' />
      </div>
      <SideMenu />
    </section>
  );
}

FeedbackTool.propTypes = {
  document: PropTypes.object
};

export default FeedbackTool;
