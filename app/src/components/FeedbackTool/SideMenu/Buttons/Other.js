import React, {PropTypes} from 'react';
import ModalFeedbackButton from './ModalFeedbackButton';
import {Form} from 'freakin-react-forms';
import Input from './../../../FormElements/Input';
import uuid from 'uuid';
import OtherSVG from './OtherSVG';
import FlagPublisherContent from './../../FeedbackToolContentFlags/FeedbackToolContentFlag/FlagPublisherContent/FlagPublisherContent';

const Other = ({submitFeedbackToolContentItem, position, onHighlight, completeHighlight, submissionId}) => {
  let model = {
    comment: {
      type: 'textarea',
      name: 'comment',
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

    const result = {
      type: 'other',
      instructorContent: x,
      position,
      submissionId,
      id: uuid.v4()
    };
    submitFeedbackToolContentItem(result);
  };

  //Bottom resources const is temp. Should be removed.
  const resources = {resources: [
    {
      title: 'What is a Thesis',
      url: 'http://www.google.com'
    },
    {
      title: 'Examples of a good Thesis',
      url: 'http://www.facebook.com'
    },
    {
      title: 'Where should I put my Thesis',
      url: 'http://www.yahoo.com'
    }
  ]};
  const form = (onSubmit, onClose) => (
    <Form submitHandler={onSubmit} model={model}>
      <Input frfProperty={model.sentimentLevel} options={model.sentimentLevel.options} />
      <Input frfProperty={model.comment} />
      <FlagPublisherContent publisherContent={resources} />
      <button type="submit">Save</button>
      <button onClick={onClose}>Cancel</button>
    </Form>);
  const icon = (<OtherSVG className="Icon" />);

  return (
    <ModalFeedbackButton
      form={form}
      onHighlight={onHighlight}
      completeHighlight={completeHighlight}
      color="blue"
      contentType="other"
      commentIcon={icon}
      onSubmit={onFormSubmit}
      model={model}
      submissionId={submissionId}
      position={position}
      title="Other"
    />
  );
};

Other.propTypes = {
  submitOtherComment: PropTypes.func,
  position: PropTypes.object,
  onHighlight: PropTypes.func,
  completeHighlight: PropTypes.func,
  submitFeedbackToolContentItem: PropTypes.func,
  submissionId: PropTypes.string
};

export default Other;
