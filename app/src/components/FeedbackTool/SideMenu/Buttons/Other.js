import React, {PropTypes} from 'react';
import FeedbackButton from './FeedbackButton';
import {Form} from 'freakin-react-forms';
import Input from './../../../FormElements/Input';
import uuid from 'uuid';
import OtherSVG from './OtherSVG';

const Other = ({submitOtherComment, position, onHighlight, completeHighlight}) => {
  let model = {
    otherComment: {
      type: 'textarea',
      name: 'otherComment',
      placeholder: 'Add a comment'
    },
    sentimentLevel: {
      type: 'select',
      name: 'sentimentLevel',
      options: [
        <option value="grapefruit" key={uuid.v4()}>Grapefruit</option>,
        <option value="lime" key={uuid.v4()}>Lime</option>,
        <option value="coconut" key={uuid.v4()}>Coconut</option>,
        <option value="mango" key={uuid.v4()}>Mango</option>
      ]
    }
  };

  const form = (onSubmit, onClose) => (
    <Form submitHandler={onSubmit} model={model}>
      <div>
        {<Input frfProperty={model.sentimentLevel} options={model.sentimentLevel.options} />}
      </div>
      <div>
        <Input frfProperty={model.otherComment} />
      </div>
      <button type="submit">Submit</button>
      <button onClick={onClose}>Cancel</button>
    </Form>);
  const icon = (<OtherSVG className="Icon" />);
  return (
    <FeedbackButton
      form={form}
      onHighlight={onHighlight}
      completeHighlight={completeHighlight}
      color="blue"
      buttonName="other"
      commentIcon={icon}
      onSubmit={submitOtherComment}
      model={model}
      position={position}
    />
  );
};

Other.propTypes = {
  submitOtherComment: PropTypes.func,
  position: PropTypes.object,
  onHighlight: PropTypes.func,
  completeHighlight: PropTypes.func
};

export default Other;
