import React from 'react';
import MLModal from './../../MLModal/MLModal';
import {Form} from 'freakin-react-forms';
import Input from './../../FormElements/Input'

const FeedbackToolModal = ({position, model, onClose, onSubmit, isOpen}) => {
  return (
    <MLModal position={position} titleBar={{enable: false}} isOpen={isOpen}
             closeModal={onClose}>
      <Form submitHandler={onSubmit} model={model}>
        <div>
          {/*          <Input frfProperty={model.sentimentLevel} options={sentimentOptions} />*/}
        </div>
        <div>
          <Input frfProperty={model.otherComment} />
        </div>
        <button type="submit">Submit</button>
        <button onClick={x=>onClose(x)}>Cancel</button>
      </Form>
    </MLModal>
  );
};

export default FeedbackToolModal;
