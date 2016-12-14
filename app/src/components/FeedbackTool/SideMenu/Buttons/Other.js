import React from 'react';
import ModalFeedbackButton from './ModalFeedbackButton';
import OtherSVG from './OtherSVG';
// import FlagPublisherContent from './../../FeedbackToolContentFlags/FeedbackToolContentFlag/FlagPublisherContent/FlagPublisherContent';

const Other = (props) => {
  // //Bottom resources const is temp. Should be removed.
  // const resources = {resources: [
  //   {
  //     title: 'What is a Thesis',
  //     url: 'http://www.google.com'
  //   },
  //   {
  //     title: 'Examples of a good Thesis',
  //     url: 'http://www.facebook.com'
  //   },
  //   {
  //     title: 'Where should I put my Thesis',
  //     url: 'http://www.yahoo.com'
  //   }
  // ]};
  // const form = (onSubmit, onClose) => (
  //   <Form submitHandler={onSubmit} model={model}>
  //     <Input frfProperty={model.sentimentLevel} options={model.sentimentLevel.options} />
  //     <Input frfProperty={model.comment} />
  //     <FlagPublisherContent publisherContent={resources} />
  //     <button type="submit">Save</button>
  //     <button onClick={onClose}>Cancel</button>
  //   </Form>);

  const icon = (<OtherSVG className="Icon" />);

  return (
    <ModalFeedbackButton
      color="blue"
      contentType="other"
      commentIcon={icon}
      title="Other"
      {...props}
    />
  );
};

export default Other;
