import React from 'react';
import Input from './../../../FormElements/Input';
import ResourceLinksContainer from './../../../../containers/ResourceLinksContainer';
import {Form} from 'freakin-react-forms';

export const standardForm = (onSubmit, onClose, contentMap) => {
  return (
    <Form submitHandler={onSubmit} model={contentMap.model}>
      <div>
        {<Input frfProperty={contentMap.model.sentimentLevel} options={contentMap.model.sentimentLevel.options} />}
      </div>
      <div>
        <Input frfProperty={contentMap.model.comment} />
      </div>
      {contentMap.resourceLinks ? <ResourceLinksContainer resourceLinks={contentMap.resourceLinks} /> : null }
      <button type="submit">Submit</button>
      <button onClick={onClose}>Cancel</button>
    </Form>);
};
