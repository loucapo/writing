import React, {Component, PropTypes} from 'react';
import FeedbackModal from '../../FeedbackModal/FeedbackModal';
import sideMenu from './../sideMenu.css';

class FeedbackButton extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    //highlight color, specificSubmitFormAction, editorStateUpdateAction, specificFormModels

  }
  componentWillMount() {
    this.setState({
      isOpen: false
    });
  }
  onClose(e) {
    e.preventDefault();
    this.props.completeHighlight(this.props.color);
    this.setState({
      isOpen: false
    });
  }

  onSubmit(x) {
    this.props.onSubmit(x);
    this.props.completeHighlight();
    this.setState({
      isOpen: false
    });
  }

  onClick(e) {
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
      // convert the new Draft.js EditorState back to react-rte EditorValue
      position: pos
    });
  }

  render() {
    return (
      <li data-id={this.props.buttonName}>
        <a onClick={this.onClick}>
           {this.props.commentIcon}
           <span className={sideMenu.sideMenuCaption}>
             {this.props.buttonName}
           </span>
        </a>
        <FeedbackModal
          isOpen={this.state.isOpen}
          position={this.state.position}
          onClose={this.onClose}
          form={this.props.form(this.onSubmit, this.onClose)} />
      </li>
    );
  }
}

FeedbackButton.propTypes = {
  onHighlight: PropTypes.func,
  completeHighlight: PropTypes.func,
  color: PropTypes.string,
  onSubmit: PropTypes.func,
  position: PropTypes.object,
  buttonName: PropTypes.string,
  commentIcon: PropTypes.object,
  form: PropTypes.func
};

export default FeedbackButton;
