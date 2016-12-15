import React, {Component, PropTypes} from 'react';
import sideMenu from './../sideMenu.css';
import FeedbackModal from './../../FeedbackModal/FeedbackModal';
import feedbackToolContentMap from './../../feedbackToolContentMap';
import { standardSentiment } from './modalFormSentimentLevel';

import uuid from 'uuid';

class ModalFeedbackButton extends Component {

  state = {
    isOpen: false
  };

  contentMap = feedbackToolContentMap[this.props.contentType];

  onClose = (e) => {
    e.preventDefault();
    this.props.completeHighlight({success: false, removeColor: this.contentMap.color});
    this.setState({
      isOpen: false
    });
  };

  onFormSubmit = (x) => {
    let shouldChangeColor;
    if (x.sentimentLevel === 'goodJob') {
      shouldChangeColor = true;
    }

    this.props.completeHighlight({
      success: true,
      removeColor: shouldChangeColor ? 'blue' : null,
      changeColor: shouldChangeColor ? 'green' : null
    });

    // get the text value from the sentiment level select.
    const sentimentLevel = standardSentiment.find(o => o.value === x.sentimentLevel);
    const instructorContent = {
      comment: x.comment,
      sentimentLevel: sentimentLevel ? sentimentLevel.text : ''
    };

    // build the result for redux
    const result = {
      contentType: this.props.contentType,
      title: this.contentMap.title,
      instructorContent,
      position: this.props.position,
      submissionId: this.props.submissionId,
      id: uuid.v4()
    };
    this.props.submitFeedbackToolContentItem(result);

    this.setState({
      isOpen: false
    });
  };

  onClick = (e) => {
    e.preventDefault();
    if(!this.props.onHighlight(this.props.color)) {
      return;
    }
    let pos;
    if(this.props.position) {
      const rect = this.props.position;
      let left = rect.left - 150 + rect.width / 2;
      left = left > 0 ? left : 0;
      pos = {top: rect.bottom + 20, left};
    }

    this.setState({
      isOpen: true,
      position: pos
    });
  };

  render() {
    const form = this.contentMap.form(this.onFormSubmit, this.onClose, this.contentMap);
    return (
      <li data-id={this.props.contentType}>
        <div onClick={this.onClick} style={{width: '100%'}}>
          {this.props.commentIcon}
          <span className={sideMenu.sideMenuCaption}>
            {this.contentMap.title}
          </span>
        </div>
        <FeedbackModal
          isOpen={this.state.isOpen}
          position={this.state.position}
          onClose={this.onClose}
          form={form} />
      </li>
    );
  }
}

ModalFeedbackButton.propTypes = {
  onFormSubmit: PropTypes.func,
  completeHighlight: PropTypes.func,
  color: PropTypes.string,
  onSubmit: PropTypes.func,
  position: PropTypes.object,
  contentType: PropTypes.string,
  commentIcon: PropTypes.object,
  form: PropTypes.func,
  submissionId: PropTypes.string,
  submitAction: PropTypes.func,
  onHighlight: PropTypes.func,
  submitFeedbackToolContentItem: PropTypes.func
};

export default ModalFeedbackButton;
