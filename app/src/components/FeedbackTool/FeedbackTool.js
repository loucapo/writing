import React, { PropTypes } from 'react';
import RichTextEditor from 'ml-react-rte';
import SideMenu from './SideMenu/SideMenu';
import feedbackTool from './feedbackTool.css';

const FeedbackTool = ({value, onChange}) => {
  return (
    <section className={feedbackTool.feedbackToolContainer}>
      <div className={feedbackTool.editorContainer}>
        <RichTextEditor onChange={onChange} value={value} readOnly={true} />
      </div>
      <SideMenu />
    </section>
  );
}

FeedbackTool.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func
};

export default FeedbackTool;
