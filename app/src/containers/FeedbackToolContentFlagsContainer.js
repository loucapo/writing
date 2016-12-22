import { connect } from 'react-redux';
import FeedbackToolContentFlags from '../components/FeedbackTool/FeedbackToolContentFlags/FeedbackToolContentFlags';
import feedbackToolContentMap from './../components/FeedbackTool/feedbackToolContentMap';

const mapStateToProps = (state, props) => {
  let feedbackToolContentItems = state.feedbackToolContentItems.filter(x => x.submissionId === props.submissionId);
  // hydrating the publisher content from state. denormailizing
  const FTCI = feedbackToolContentItems.map(x => {
    const feedbackMap = feedbackToolContentMap[x.contentType];
    // I don't understand why I need to clone pc here.  I tried filter rather than find which should
    // return a clone and it wouldn't work so I don't know.
    let newX = {...x};

    const publisherContent = state.publisherContent.find(pc => pc.contentType === x.contentType);
    if(publisherContent) {
      newX.publisherContent = {...publisherContent};
    }

    newX.title = feedbackMap.title;
    newX.color = feedbackMap.color;
    newX.icon = feedbackMap.icon;
    newX.resources = feedbackMap.resourceLinks
      && feedbackMap.resourceLinks.map(r => state.resourceLinks.find(rl => rl.id === r));
    return newX;
  });
  return {
    feedbackToolContentItems: FTCI
  };
};

export default connect(mapStateToProps)(FeedbackToolContentFlags);
