import React from 'react';
import MLIcon from 'ml-react-cdl-icons';
import Input from './../../../FormElements/Input';
import ResourceLinksContainer from './../../../../containers/ResourceLinksContainer';
import {Form} from 'freakin-react-forms';
import ActionButton from '../../../ActionButton/ActionButton';
import actionButton from '../../../ActionButton/actionButton.css';
import modalFormStyles from './modalForm.css';

export const standardForm = (onSubmit, onClose, contentMap) => {
  return (
    <Form submitHandler={onSubmit} model={contentMap.model}>
      <Input frfProperty={contentMap.model.sentimentLevel} options={contentMap.model.sentimentLevel.options} />
      <MLIcon
        className={modalFormStyles.commentMic}
        title="comment microphone"
        type="microphone"
        fill="#676767"
        width="26"
        height="26"
        viewBox="0 0 24 24"
      />
      <Input frfProperty={contentMap.model.comment} />
      {contentMap.resourceLinks ? <ResourceLinksContainer resourceLinks={contentMap.resourceLinks} /> : null }
      <ActionButton dataId="feedback-modal-submit" type="submit" css={ actionButton.action_button_blue } content="Submit" />
      <button onClick={onClose}>Cancel</button>
    </Form>);
};


