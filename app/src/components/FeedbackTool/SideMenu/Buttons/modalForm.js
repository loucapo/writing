import React from 'react';
import Input from './../../../FormElements/Input';
import ResourceLinksContainer from './../../../../containers/ResourceLinksContainer';
import {Form} from 'freakin-react-forms';
import ActionButton from '../../../ActionButton/ActionButton';
import actionButton from '../../../ActionButton/actionButton.css';

export const standardForm = (onSubmit, onClose, contentMap) => {
  return (
    <Form submitHandler={onSubmit} model={contentMap.model}>
      <Input frfProperty={contentMap.model.sentimentLevel} options={contentMap.model.sentimentLevel.options} />
      <Input frfProperty={contentMap.model.comment} />
      {contentMap.resourceLinks ? <ResourceLinksContainer resourceLinks={contentMap.resourceLinks} /> : null }
      <ActionButton dataId="feedback-modal-submit" type="submit" css={ actionButton.action_button_blue } content="Submit" />
      <button onClick={onClose}>Cancel</button>
    </Form>);
};


