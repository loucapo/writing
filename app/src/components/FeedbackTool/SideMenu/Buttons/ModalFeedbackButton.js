import React, {Component, PropTypes} from 'react';
import sideMenu from './../sideMenu.css';
import FeedbackModal from './../../FeedbackModal/FeedbackModal';
import feedbackToolTypeMap from './../../feedbackToolTypeMap';

class ModalFeedbackButton extends Component {

  state = {
    isOpen: false
  };

  onClose = (e) => {
    e.preventDefault();
    this.props.completeHighlight({success: false, removeColor: this.props.color});
    this.setState({
      isOpen: false
    });
  };

  onFormSubmit = (x) => {
    this.props.onSubmit(x);
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
    return (
      <li data-id={this.props.contentType}>
        <div onClick={this.onClick} style={{width: '100%'}}>
          {this.props.commentIcon}
          <span className={sideMenu.sideMenuCaption}>
            {feedbackToolTypeMap[this.props.contentType].title}
          </span>
        </div>
        <FeedbackModal
          isOpen={this.state.isOpen}
          position={this.state.position}
          onClose={this.onClose}
          form={this.props.form(this.onFormSubmit, this.onClose)} />
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
  onHighlight: PropTypes.func
};

export default ModalFeedbackButton;
