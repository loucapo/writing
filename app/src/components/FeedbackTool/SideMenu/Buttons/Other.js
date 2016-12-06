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
      default: 'needsWork',
      options: [
        <option className="goodJob" value="goodJob" key={uuid.v4()}>
          Great job! Reasons and evidence are convincing.
        </option>,
        <option className="needsWork" value="needsWork" key={uuid.v4()}>
          Needs work. Needs additional reasons/support.
        </option>,
        <option className="extensiveRevision" value="extensiveRevision" key={uuid.v4()}>
          Needs extensive revision. Inadequate reasons/support.
        </option>
      ]
    }
  };

  const onFormSubmit = (x) => {
    let shouldChangeColor;
    if(x.sentimentLevel === 'goodJob') {
      shouldChangeColor = true;
    }

    completeHighlight({
      success: true,
      removeColor: shouldChangeColor ? 'blue' : null,
      changeColor: shouldChangeColor ? 'green' : null});

    submitOtherComment(x);
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
      onSubmit={onFormSubmit}
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
